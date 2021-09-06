/**
 * @format
 */

import {AppRegistry, Platform, View, Text} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';
import React from 'react';

const App = () => {
  return (
    <View>
      <Text>hello react-native-web</Text>
    </View>
  );
};

AppRegistry.registerComponent('WebForRN', () => App);
if (Platform.OS === 'web') {
  AppRegistry.runApplication('WebForRN', {
    rootTag: document.getElementById('root'),
  });
}
