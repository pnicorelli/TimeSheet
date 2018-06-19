import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Home from './Home.js';
import Scan from './ScanQR.js'


const Navigator = createStackNavigator(
    {
      Home: {
        screen: Home
      },
      ScanQR:{
        screen:Scan
      },
    },
    {
      initialRouteName: 'Home',
    }
);

export default class App extends React.Component {
  render() {
    return <Navigator/>;
  }
}
