import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Button, Spinner } from './components/common/Index';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {

  state = { loggedIn: null };

  componentWillMount() {

    firebase.initializeApp({
      apiKey: "AIzaSyDgKnjfYO3r3oiCYY2_SgxKz7meEAPeXNI",
      authDomain: "authentication-47cd7.firebaseapp.com",
      databaseURL: "https://authentication-47cd7.firebaseio.com",
      projectId: "authentication-47cd7",
      storageBucket: "authentication-47cd7.appspot.com",
      messagingSenderId: "758509034986"
    });

    firebase.auth().onAuthStateChanged((user) =>{
      if(user) {
        this.setState({ loggedIn: true});
      } else {
        this.setState({ loggedIn: false});
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
      return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
      );
      case false:
        return <LoginForm />;
      default:
        return <Spinner />;
    }
  }

  render() {
    return (
      <View style={styles.vStyle}>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
};

const styles = {
  vStyle: {
    height: 100
  }
};

export default App;
