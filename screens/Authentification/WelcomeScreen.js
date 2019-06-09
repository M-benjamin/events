import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import styled from "styled-components";

class WelcomeScreen extends Component {
  componentDidMount() {
    console.log("HELLO THERE");
  }

  render() {
    return (
      <Container>
        <Text> WelcomeScreen </Text>
        <Button
          onPress={() => this.props.navigation.navigate("Login")}
          title="Sign In"
        />
        <Button
          onPress={() => this.props.navigation.navigate("SignUp")}
          title="SignUp"
        />
      </Container>
    );
  }
}

export default WelcomeScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: red;
`;
