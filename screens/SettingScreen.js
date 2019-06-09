import React, { Component } from "react";
import { View, Text, AsyncStorage, Button } from "react-native";

class SettingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  signOut = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("AuthLoading");
  };

  render() {
    return (
      <View>
        <Text> SettingScreen </Text>
        <Button onPress={() => this.signOut()} title="Sign Out" />
      </View>
    );
  }
}

export default SettingScreen;
