import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import WelcomeScreen from "../screens/Authentification/WelcomeScreen";
import LoginScreen from "../screens/Authentification/LoginScreen";
import SignUpScreen from "../screens/Authentification/SignUpScreen";

const AuthNavigator = createStackNavigator({
  // Welcome: WelcomeScreen,
  Login: LoginScreen,
  SignUp: SignUpScreen
});

export default AuthNavigator;
