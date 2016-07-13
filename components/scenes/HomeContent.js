import React, { Component } from 'react';
import { 
  View, 
  Text, 
  TouchableHighlight, 
  StyleSheet, 
  ScrollView 
} from 'react-native';

import { goto, goBack } from '../../libs/routerUtils';

class HomeContent extends Component {

  constructor(){
    super();
   
  }

  componentDidMount(){
   
  }
  
  render(){
    return(
      <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={ { flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50 } }>
         <TouchableHighlight onPress={() => { goto( this.context.store, 'ViewMap') } }  style={{flex: 1,
    marginTop: 10, backgroundColor: 'rgba(220,220,220,0.7)', paddingHorizontal: 18, paddingVertical: 12, borderRadius: 20, }}>
           <Text style={{alignSelf: 'center'}}>Show my current position</Text>
         </TouchableHighlight>

         <TouchableHighlight onPress={() => { goto( this.context.store, 'Contacts') } } style={{flex: 1,
    marginTop: 10, backgroundColor: 'rgba(220,220,220,0.7)', paddingHorizontal: 18, paddingVertical: 12, borderRadius: 20, }}>
           <Text style={{alignSelf: 'center'}}>Read Contacts</Text>
         </TouchableHighlight>
          
        </View>
      </ScrollView>
      </View>
      )
  }


  renderLoadingView(){
    return(
      <View style={{ flex: 1 }}>
            <Text>Fetching... </Text>
          </View>
      )
  }
}

HomeContent.contextTypes = {
  openDrawer: React.PropTypes.func,
  store: React.PropTypes.object.isRequired
};
const styles = StyleSheet.create({
  logout: {
    backgroundColor:'#000',
    width:180,
    borderColor: '#ccc',
    borderRadius: 10, 
    borderWidth: 1,
    alignItems: 'center'
  },
  clockin:{
    backgroundColor:'red',
    width:100,
    borderColor: '#ccc',
    borderRadius: 10, 
    borderWidth: 1,
    alignItems: 'center'
  },
  Today: {
    backgroundColor:'#000',
    width:120,
    borderColor: '#ccc',
    borderRadius: 10, 
    borderWidth: 1,
    alignItems: 'center'
  },
  inputBox: {
    flex: 1,
    height: 60,
    backgroundColor: '#F0F0F0',
    marginTop: 10,
    paddingLeft: 15,
  },


})
module.exports = HomeContent;