import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class LoginScreen extends Component{
  render() {
    return {
      <View>
      <Text> This is the login screen </Text>
      <Button onPress={ {} =>
      this.props.navigation.navigate{'HomeScreen'}}
      title="Go To The home screen" />
      </View>
    };
  }
}
//need to export the class we created
export default LoginScreen;
