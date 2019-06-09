import { createSwitchNavigator, createAppContainer } from "react-navigation";
import AuthLoadingScreen from "../screens/Authentification/AuthLoadingScreen";
import AuthNavigator from "./authNavigator";
import AppDrawerNavigation from "./appDrawerNavigator";

const AppNavigator = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthNavigator,
  App: AppDrawerNavigation
});

export default createAppContainer(AppNavigator);
