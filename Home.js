import React, { Component } from 'react';
import { Alert, AppRegistry, View, Text, StyleSheet, ImageBackground} from 'react-native';
import { Button } from 'native-base';

export default class ButtonBasics extends Component {
  render() {
    return (
      <ImageBackground source={require('./blurBg.png')} style={styles.backgroundImage}>
        <View style={{flex:5,alignItems:'center', justifyContent:'center',}}>
          <View style={styles.container}>
            <Text style={styles.title}> CYRIUS </Text>
            <Text style={styles.txt}> TIMESHEET </Text>
            </View>
            <View style={styles.container}>
            <Button style={styles.button} onPress={() => this.props.navigation.navigate('ScanQR')}>
              <Text style={styles.txtbut}>Log In</Text>
            </Button>
          </View>
        </View>
      </ImageBackground>
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
      flex:5,
      width: null,
      height: null,
  },
  button:{
    alignItems:'center',
    marginTop:15,
    paddingTop:15,
    paddingBottom:15,
    paddingLeft:100,
    paddingRight:100,
    backgroundColor:'#00FFFF',
    borderRadius:30
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
  txtbut:{
    fontSize: 15,
    fontWeight: '700',
    color: 'white',
  },
  });
