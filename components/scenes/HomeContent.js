import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView
} from 'react-native';
import { goto, goBack } from '../../libs/routerUtils';

class HomeContent extends Component {
  render() {
    return (
      <ScrollView>
      <View style={ { flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50 } }>
         <TouchableHighlight onPress={() => {goto( this.context.store, 'ViewMap' );}} style={{flex: 1,
    marginTop: 10, backgroundColor: 'rgba(220,220,220,0.7)', paddingHorizontal: 18, paddingVertical: 12, borderRadius: 20, }}>
           <Text style={{alignSelf: 'center'}}>Show my current position</Text>
         </TouchableHighlight>

         <TouchableHighlight style={{flex: 1,
    marginTop: 10, backgroundColor: 'rgba(220,220,220,0.7)', paddingHorizontal: 18, paddingVertical: 12, borderRadius: 20, }}>
           <Text style={{alignSelf: 'center'}}>Get Distance</Text>
         </TouchableHighlight>
          
        </View>
        </ScrollView>
    );
  }
}

HomeContent.contextTypes = {
  openDrawer: React.PropTypes.func,
  store: React.PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = HomeContent;
