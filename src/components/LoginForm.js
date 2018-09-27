import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common/Index';

class LoginForm extends Component {

  state = { email: '', password: ''};
render() {

    return (
      <Card>

        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            OnChangeText= {(email) => {this.setState({ email })}}
          />
      </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            OnChangeText= {password => {this.setState({ password })}}
          />
        </CardSection>

        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>

      </Card>
    );
  }
}

export default LoginForm;
