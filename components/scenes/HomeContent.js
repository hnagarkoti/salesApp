import React, { Component } from 'react';
import { View, Text, ScrollView,TouchableHighlight, StyleSheet } from 'react-native';
var Contacts = require('react-native-contacts');
import { Card,Button } from 'react-native-material-design';

class HomeContent extends Component {

  constructor(){
    super();
    this.state={
      allContacts:[],
      loaded: false
    } 
  }

  componentDidMount(){
    var me = this;
    Contacts.getAll((err, contacts) => {
      if(err && err.type === 'permissionDenied'){
        console.log('permissionDenied',err);
      } else {
        console.log('contacts[0]:--- ',contacts);
        let allContacts = contacts;
      me.setState({allContacts});
      me.setState({
        loaded: true
      })
      }
    })
  }
  
  render(){
    if(!this.state.loaded){
      return this.renderLoadingView();
    }
    return(
      <View style={{ flex: 1 }}>
      <View style={{flexDirection:'row'}}>
        <TouchableHighlight style={styles.logout}>
          <Text style={{color: '#ffffff',fontSize: 18,textAlign: 'center',margin: 9}}>Logout</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.clockin}>
          <Text style={{color: '#ffffff',fontSize: 18,textAlign: 'center',margin: 9}}>Clock In</Text>
        </TouchableHighlight>
        </View>
        <ScrollView>
          <View>
           { this.state.allContacts.map((contacts) => (
                <Card key={contacts.recordID} style={{ backgroundColor: 'whitesmoke', padding: 10, margin: 1 }}>
                  <Card.Body >
                    <Text>
                      {contacts.givenName + ' ' + contacts.middleName} 
                    </Text>
                    <Text>
                      {contacts.phoneNumbers.label === 'mobile' ? contacts.phoneNumbers.number : null }
                    </Text>
                  </Card.Body>
                </Card>
               )) }
              < /View>
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
    backgroundColor:'#000',
    width:180,
    borderColor: '#ccc',
    borderRadius: 10, 
    borderWidth: 1,
    alignItems: 'center'
  }

})
module.exports = HomeContent;