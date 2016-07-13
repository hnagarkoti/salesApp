import React, { Component } from 'react';
import { View, Text, ScrollView,TouchableHighlight, StyleSheet, TextInput } from 'react-native';
var Contacts = require('react-native-contacts');
import { Card,Button } from 'react-native-material-design';

class HomeContent extends Component {

  constructor(){
    super();
    this.state={
      allContacts:[],
      search:'',
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
  setSearchText(event){
    let searchText = event.nativeEvent.text;
   base.fetch(‘notes’, {
   context: this,
   asArray: true,
   then(contacts){
     var filteredData = this.filterNotes(searchText, contacts);
     var allContacts = filteredData;
     this.setState({
       allContacts
      });
   }
 });
}

filterNotes(searchText, notes) {
  let text = searchText.toLowerCase();

  return filter(notes, (n) => {
    let note = n.body.toLowerCase();
    return note.search(text) !== -1;
  });
}
  render(){
    if(!this.state.loaded){
      return this.renderLoadingView();
    }
    return(
      <View style={{ flex: 1 }}>
      <View style={{flexDirection:'row'}}>
        <TextInput
              placeholder="Enter name"
              placeholderTextColor="#bbb"
              onChange={this.setSearchText.bind(this)}
              value={ this.state.search}
              style={styles.inputBox}
            />
        <TouchableHighlight style={styles.clockin} onPress={ (this.search.bind(this)) }>
          <Text style={{color: '#ffffff',fontSize: 18,textAlign: 'center',margin: 9}}>search</Text>
        </TouchableHighlight>
        </View>
        <ScrollView>
          <View>
           { this.state.allContacts.map((contacts) => (
                <Card key={contacts.recordID} style={{ backgroundColor: 'whitesmoke', padding: 10, margin: 1 }}>
                  <Card.Body >
                    <Text>
                      {contacts.givenName} {contacts.middleName==null? '' : contacts.middleName} 
                    </Text>
                      {contacts.phoneNumbers.map((numbers)=>(
                          <Text>{ numbers.number }</Text>
                        ))}
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