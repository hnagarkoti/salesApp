/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  Text,
  BackAndroid,
  DrawerLayoutAndroid,
  StyleSheet,
  View,
  DeviceEventEmitter,
} from 'react-native';


import { connect } from 'react-redux';
import { goto, goBack } from '../libs/routerUtils';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { mApi } from '../libs/Api';

import {
  actions as routerActions,
  NavBar,
  Route,
  Router,
  Schema,
  TabBar,
  TabRoute
} from './core/RouterLibrary';

import Sidebar from './Sidebar';


const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators( { ...routerActions }, dispatch),
  dispatch,
});

const mapStateToProps = state => ({
  router: state.router,
  // drawer: state.drawer,
});



let defaultSchema = {
  navBar: NavBar,
  navLeftColor: '#FFFFFF',
  navTint: '#224655',
  navTitleColor: '#FFFFFF',
  navTitleStyle: {
    fontFamily: 'Avenir Next',
    fontSize: 18,
  },
  statusStyle: 'default',
  tabBar: TabBar,
  style: {
    backgroundColor: '#ED1C26',
  }
};

import HomeContent from './scenes/HomeContent';
import ViewMap from './scenes/ViewMap';
import Contacts from './scenes/Contacts';


class AApplication extends Component{

  static contextTypes = {
    store: React.PropTypes.object.isRequired
  };

  static childContextTypes = {
    openDrawer: React.PropTypes.func,
    closeDrawer: React.PropTypes.func
  };

  constructor(){
    super();
    this.openDrawer = this.openDrawer.bind(this);
    this.renderSideBar = this.renderSideBar.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
  }

  getChildContext(){
    return {
      openDrawer: this.openDrawer,
      closeDrawer: this.closeDrawer
    }
  }

  renderSideBar(){
    let state = this.context.store.getState();
    let router = this.refs.router;
    if( !router ){
      return false;
    }
    var currentRoute =  router.routes[state.router.currentRoute];
    if( ! currentRoute ){
      return false;
    }
    if( currentRoute.sidebar ){
      return currentRoute.sidebar();
    }
  }

  render() {
    return (
      <DrawerLayoutAndroid
        style={styles.drawer}
        ref="drawer"
        drawerLockMode={ this.renderSideBar()? 'unlocked' : 'locked-closed' }
        drawerWidth={260}
        onDrawerOpen={() => {
          this._overrideBackPressForDrawerLayout = true;
        }}
        onDrawerClose={() => {
          this._overrideBackPressForDrawerLayout = false;
        }}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={this.renderSideBar}>
        {this.renderContent()}
      </DrawerLayoutAndroid>
    );
  }

  openDrawer(){
    if( this.refs.drawer ){
      this.refs.drawer.openDrawer();
    }
  }
  closeDrawer(){
    if( this.refs.drawer ){
      this.refs.drawer.closeDrawer();
    }
  }

  componentWillMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.handleBackPress.bind(this));
  }

  handleBackPress (){

    if (this._overrideBackPressForDrawerLayout) {
      // This hack is necessary because drawer layout provides an imperative API
      // with open and close methods. This code would be cleaner if the drawer
      // layout provided an `isOpen` prop and allowed us to pass a `onDrawerClose` handler.
      this.refs.drawer && this.refs.drawer.closeDrawer();
      return true;
    }
    let store = this.context.store;
    let state = store.getState();
    if( state.router.routes.length > 1 ){
      store.dispatch({
        type: 'ROUTER_POP',
        payload:{}
      });
      return true;
    }
    return false;
  }

  renderContent(){
    let menuIcon = ( <View  style={{ alignItems: 'center', justifyContent: 'center' }} ><Icon name="menu" size={30} color="#fff" onPress={this.openDrawer}/></View>);
    defaultSchema.navLeft = menuIcon;
    let sidebar = ()=> <Sidebar/>;
    return(
        <Router initial="Welcome" {...this.props} ref="router" >
          <Schema name="default" {...defaultSchema} />
          <Route name="Welcome" component={HomeContent} title="" sidebar={sidebar} />
          <Route name="ViewMap" hideNavBar={true} component={ViewMap} title="" sidebar={sidebar} />
          <Route name="Contacts" hideNavBar={true} component={Contacts} title="" sidebar={sidebar} />
        </Router>
    );
  }
}

const styles = StyleSheet.create({
  drawer: {
    // borderStyle: 'solid', borderColor: '#000000', borderWidth: 10,
    // marginTop: 25,
    
  },

  container: {
    flex: 1,
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(AApplication);
