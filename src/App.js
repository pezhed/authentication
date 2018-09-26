import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common/Index';
import firebase from 'firebase';


class App extends Component {

  componentWillMount() {
    
    firebase.initializeApp({
      apiKey: "AIzaSyDgKnjfYO3r3oiCYY2_SgxKz7meEAPeXNI",
      authDomain: "authentication-47cd7.firebaseapp.com",
      databaseURL: "https://authentication-47cd7.firebaseio.com",
      projectId: "authentication-47cd7",
      storageBucket: "authentication-47cd7.appspot.com",
      messagingSenderId: "758509034986"
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>My App </Text>
      </View>
    );
  }
};

export default App;
