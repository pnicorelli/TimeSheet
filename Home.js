import React, { Component } from 'react';
import { Alert, AppRegistry, Button,  View, Text, StyleSheet,  } from 'react-native';
import Scan from './ScanQR.js'

export default class ButtonBasics extends Component {
  login() {

  }
  render() {
    return (
      <View style={{flex:5,alignItems:'center', justifyContent:'center',}}>
        <View style={styles.container}>
          <Text> CYRIUS TIMESHEET </Text>
        </View>
        <View style={styles.container}>
          <Button onPress={() => this.props.navigation.navigate('ScanQR')} title="Log In" />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex:2.5,
    alignItems:'center',
    justifyContent:'center'
  },
  });
