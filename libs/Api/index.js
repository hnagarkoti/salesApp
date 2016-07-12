
import _ from 'lodash';
import querystring from 'querystring';
import RequestBody from './RequestBody';
import EventEmitter from 'EventEmitter';

import config from '../../config';

const defaultHeaders = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};




class Api{

  constructor( config ){
    this.endPoint = config.endPoint;
    this.sessionId = null;
    this.user = null;
    this.appList = [];
    this.emitter = new EventEmitter();
  }

  // setSessionData = function ( obj={} ) {
  //   this.user = obj.user;
  //   this.sessionId = obj.sessionId;
  //   if( obj.walkthroughSeen ){
  //     this.walkthroughSeen = obj.walkthroughSeen;
  //   }
  // }

  isLoggedIn(){
    return this.sessionId && this.user;
  }

  /**
   * Do a web request to any url. A general purpose method.
   *
   * @param {String} url - url
   * @param {String} method - method
   * @param {Object} query - query
   * @param {Object} body - body
   * @param {Object} headers - headers
   * @returns {undefined}
   */
  genericRequest( url, method="GET", query={}, body={}, headers=defaultHeaders ){
    let opts = {
      method: method,
      headers, headers,
      credentials: 'omit',
    };

    if( ['POST', 'PUT', 'PATCH'].indexOf( method) !== -1 ){
      opts.body = body
    }
    url += '?' + querystring.stringify( query );
    return fetch( url, opts );
  }



  /**
   * Do an Api request.
   * 
   * @param {String} path - Api action path. eg `/users/123`
   * @param {String} method - method
   * @param {Object} query - query
   * @param {Object} body - body
   * @param {Object} headers - headers
   * @returns {Object} response body as a json object
   */
  request( path, method="GET", query={}, body={}, headers={} ){
    let url = this.endPoint + path;
    body = new RequestBody( body ) + '';
    headers['Accept'] = 'application/json';
    headers['Content-Type'] = 'application/json';
    if(this.sessionId){
      headers['X-Sessionid'] = this.sessionId;
    }
    return this.genericRequest( url, method, query, body, headers )
    .then( ( res ) =>{
     return res.text();
   })
    .then( ( text )=>{
      let out = JSON.parse( text );
      if( !out.success ){
        return Promise.reject( new Error( out.message ) );
      }
      return out;
    })
    .catch( (e)=>{
      console.log( 'Api request failed', e, path, method, query, body, headers );
      throw e;
    });
  }

}

let mApi = new Api( config.api );

export default Api;
export { mApi };

