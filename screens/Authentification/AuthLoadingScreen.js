import React from "react";
import {
  View,
  Text,
  ActivityIndicator,
  AsyncStorage,
  Button
} from "react-native";
import styled from "styled-components";

class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
    this.loadApp();
  }

  loadApp = async () => {
    const userToken = await AsyncStorage.getItem("userToken");
    this.props.navigation.navigate(userToken ? "App" : "Auth");
  };

  render() {
    return (
      <Container>
        <ActivityIndicator />
      </Container>
    );
  }
}

export default AuthLoadingScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
