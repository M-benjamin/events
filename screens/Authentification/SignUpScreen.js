import React, { Component } from "react";
import { AsyncStorage, TouchableOpacity, Alert } from "react-native";
import styled from "styled-components";
import firebase from "../Firebase";

class SignUpScreen extends Component {
  state = {
    email: "",
    password: ""
  };

  handleRegister = () => {
    console.log(this.state.email, this.state.password);
    const email = this.state.email;
    const password = this.state.password;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
        console.log("ERROR", error);
        Alert.alert("Error", error.message);
      })
      .then(response => {
        console.log("RESPONSE  IS", response);
      });

    this.props.navigation.navigate("Login");
  };

  render() {
    return (
      <Container>
        <Logo source={require("../../assets/history.png")} />
        <Text style={{ fontSize: 24 }}>Register...</Text>
        <Text>Learning History</Text>
        <TextInput
          onChangeText={email => this.setState({ email })}
          placeholder="Email"
          value={this.state.email}
          keyboardType="email-address"
        />
        <TextInput
          onChangeText={password => this.setState({ password })}
          placeholder="Password"
          value={this.state.password}
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={this.handleRegister}>
          <ButtonView>
            <ButtonText>Register</ButtonText>
          </ButtonView>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Login")}
        >
          <Text>I already have account, Go to Login</Text>
        </TouchableOpacity>
      </Container>
    );
  }
}

export default SignUpScreen;

const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  justify-content: center;
  align-items: center;
`;

const TextInput = styled.TextInput`
  border: 1px solid #dbdfea;
  width: 295px;
  height: 44px;
  border-radius: 10px;
  font-size: 17px;
  color: #3c4560;
  padding-left: 44px;
  margin-top: 20px;
`;

const Modal = styled.View`
  width: 335px;
  height: 370px;
  border-radius: 20px;
  background: white;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  align-items: center;
`;

const Logo = styled.Image`
  width: 100px;
  height: 100px;
  margin-top: 50px;
`;

const Text = styled.Text`
  margin-top: 20px;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  width: 160px;
  color: #b8bece;
  text-align: center;
`;

const ButtonView = styled.View`
  background: #653b01;
  width: 295px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 20px;
  box-shadow: 0 10px 20px #c2cbff;
`;

const ButtonText = styled.Text`
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 20px;
`;
