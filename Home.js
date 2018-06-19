import React, { Component } from 'react';
import { Alert, AppRegistry, Button,  View, Text, StyleSheet,  Image} from 'react-native';

export default class ButtonBasics extends Component {
  render() {
    return (
      <Image source={require('/blurBg.png')} style={styles.backgroundImage}>
      <View style={{flex:5,alignItems:'center', justifyContent:'center',}}>
        <View style={styles.container}>
          <Text style={styles.title}> CYRIUS </Text>
          <Text style={styles.txt}> TIMESHEET </Text>
        </View>
        <View style={styles.container}>
          <Button onPress={() => this.props.navigation.navigate('ScanQR')} title="Log In" />
        </View>
      </View>
      </Image>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex:2.5,
    alignItems:'center',
    justifyContent:'center'
  },
  backgroundImage: {
      flex: 1,
      width: null,
      height: null,
  },
  txt:{
    fontSize: 50,
    fontWeight: '100',
    color: 'white',
  },
  title:{
    fontSize: 74,
    fontWeight: '500',
    color: 'white',
  },
  });
