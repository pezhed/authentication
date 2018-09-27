import React, { Component } from 'react';
import { Button, Card, CardSection, Input, Spinner } from './common/Index';
import { Text } from 'react-native';
import firebase from 'firebase';

class LoginForm extends Component {

  state = { email: '', password: '', error: '', loading: false};

  onButtonPress() {
    console.log("This is my email value: ");

    this.setState({ error: '', loading: true});

    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(this.onLoginFail.bind(this));
    });
  }

  onLoginSuccess() {
    /*clear out error messages
    set loading to false
    clear out emai/ and password setState
    */
    this.setState({ email: '', password: '', loading: false, error: '' });
  }

  onLoginFail(){
    this.setState({ loading: false, error: "Authentication Failed"});
  }

  renderButton() {
    if(this.state.loading) {
      return <Spinner size="small"/>
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }

render() {

    return (
      <Card>

        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText= {(email) => {this.setState({ email })}}
          />
      </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText= {password => {this.setState({ password })}}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>

      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 30,
    color: 'red',
    alignSelf: 'center'
  }
}

export default LoginForm;
