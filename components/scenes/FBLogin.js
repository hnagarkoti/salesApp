import React, { Component } from 'react';
import { View, Text, ScrollView,TouchableHighlight, StyleSheet,TextInput } from 'react-native';
var {FBLogin, FBLoginManager} = require('react-native-facebook-login');

class FLogin extends Component {


	render(){
		return(
 <FBLogin />

			)
	}
	}

module.exports = FLogin;