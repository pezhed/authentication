import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common/Index';


class App extends Component {
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
