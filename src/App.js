import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Button, Spinner } from './components/common/Index';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {

  state = { loggedIn: null };

  componentWillMount() {

    firebase.initializeApp({
      //enter Firebase APi info here
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
