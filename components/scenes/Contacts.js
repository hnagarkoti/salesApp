import React, { Component } from 'react';
import { View, Text, ScrollView,TouchableHighlight, StyleSheet,TextInput } from 'react-native';
var Contacts = require('react-native-contacts');
import { Card,Button } from 'react-native-material-design';

class ContactDetail extends Component {

  constructor(){
    super();
    this.state={
      allContacts:[],
      loaded: false,
      searchText:''
    } 
  }
setSearchText(event){
  var that=this;
  console.log("------------");
   let searchText = event.nativeEvent.text;
   let filteredData = that.state.allContacts.filter((v)=>(v.givenName==searchText))
     this.setState({filteredData});
//  this.setState({searchText});
//  base.fetch(‘notes’, {
//    context: this,
//    asArray: true,
//    then(data){
//      let filteredData = this.filterNotes(searchText, data);
//      this.setState({
//        dataSource: this.ds.cloneWithRows(filteredData),
//        rawData: data,
//      });
//    }
//  });
}

// filterNotes(searchText, notes) {
//   let text = searchText.toLowerCase();

//   return filter(notes, (n) => {
//     let note = n.body.toLowerCase();
//     return note.search(text) !== -1;
//   });
// }

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
      <View style={{backgroundColor:'#ccc'}}>
      <View style={{flexDirection:'row'}}>
        <TouchableHighlight style={styles.logout}>
          <Text style={{color: '#ffffff',fontSize: 18,textAlign: 'center',margin: 9}}>Logout</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.clockin}>
          <Text style={{color: '#ffffff',fontSize: 18,textAlign: 'center',margin: 9}}>Clock In</Text>
        </TouchableHighlight>
        </View>
        <View style={{flexDirection:'row'}}>
        <TouchableHighlight style={styles.Today}>
          <Text style={{color: '#ffffff',fontSize: 18,textAlign: 'center',margin: 9}}>Today</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.Today}>
          <Text style={{color: '#ffffff',fontSize: 18,textAlign: 'center',margin: 9}}>Week</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.Today}>
          <Text style={{color: '#ffffff',fontSize: 18,textAlign: 'center',margin: 9}}>Month</Text>
        </TouchableHighlight>
        </View>
        <TextInput style={styles.searchBar} value={this.state.searchText} onChange={this.setSearchText.bind(this)} placeholder="Search" />
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
                          <Text>{ numbers.number}</Text>
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
    backgroundColor:'#000',
    width:180,
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
  searchBar: {
  paddingLeft: 30,
  fontSize: 15,
  height: 10,
  flex: .1,
  borderWidth: 9,
  borderColor: '#E4E4E4'
}

})
module.exports = ContactDetail;