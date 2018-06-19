import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert} from 'react-native';
import{Header, Body, Title} from 'native-base';
import { Constants, BarCodeScanner, Permissions } from 'expo';

export default class App extends Component {
  state = {
    hasCameraPermission: null,
    qrread:false,
  };

  componentDidMount() {
    this._requestCameraPermission();
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  _handleBarCodeRead = data => {
if (this.state.qrread === false){
    Alert.alert(
      'Scan successful!',
      JSON.stringify(data.data)
    );
    this.setState({
      qrread:true
    })
  }
};

  render() {
    return (
      <View style={{flex:2,alignItems: 'center',justifyContent: 'center', }}>
      <View style={styles.container}>
      <Text style={styles.text}>Vai sul sito
      <Text style={styles.site}> www.timesheet.it</Text>
      , accedi al tuo account e scannerizza il codice QR.</Text>
      </View>
        <View style={{flex:1,}} >
          {this.state.hasCameraPermission === false ?
              <Text>Accesso alla Fotocamera non consentito</Text> :
              <BarCodeScanner
                torchMode="off"
                onBarCodeRead={this._handleBarCodeRead}
                style={styles.camera}
              />
            }

            </View>
          </View>
    );
  }
}

const styles = StyleSheet.create({
  camera: {
    height:700,
    width:500,
  },
    container: {
    alignItems: 'baseline',
    margin:20,
  },
  site: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  text: {
    fontSize: 18,
    fontWeight: '100',
    color: 'black',
  },
});
