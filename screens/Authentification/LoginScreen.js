import React, { Component } from "react";
import { AsyncStorage, TouchableOpacity } from "react-native";
import styled from "styled-components";
import firebase from "../Firebase";

class LoginScreen extends Component {
  state = {
    email: "",
    password: ""
  };

  GoToSignIn = async () => {
    this.props.navigation.navigate("App");
  };

  handleLogin = () => {
    console.log(this.state.email, this.state.password);
    const email = this.state.email;
    const password = this.state.password;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function(error) {
        console.log("ERROR", error);
        Alert.alert("Error", error.message);
      })
      .then(async response => {
        console.log("RESPONSE  IS 1", response.user.email);
        console.log("RESPONSE  IS 2", response.user.uid);
        // console.log("RESPONSE  IS 2", response["uid"]);
        await AsyncStorage.setItem("email", response.user.email);
        await AsyncStorage.setItem("uid", response.user.uid);

        this.props.navigation.navigate("Home");
      });
  };

  render() {
    return (
      <Container>
        <Text style={{ fontSize: 24 }}>LogIn</Text>
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
        <TouchableOpacity onPress={this.handleLogin}>
          <ButtonView>
            <ButtonText>Log in</ButtonText>
          </ButtonView>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("SignUp")}
        >
          <Text>Not have account, please Register !</Text>
        </TouchableOpacity>
      </Container>
    );
  }
}

export default LoginScreen;

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
  width: 44px;
  height: 44px;
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
  background: #5263ff;
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
