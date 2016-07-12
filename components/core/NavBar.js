import React, { Component } from 'react';
import { StyleSheet, Text, View,
} from 'react-native';

export default function(props) {
  return (
    <View style={ styles.navBar }>
      { props.navLeft }
      <View style={ styles.titleContainer }>
        <Text style={ styles.navTitle }>
          { props.navTitle }
        </Text>
      </View>
      { props.navRight }
    </View>
    );
}

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: '#ED1C26',
    height: 45,
  },
  titleContainer: {
    alignItems: 'center',
    flex: 2,
  // borderStyle: 'solid', borderWidth: 2, borderColor: '#009900',
  },
  navTitle: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 17,
  }
});
