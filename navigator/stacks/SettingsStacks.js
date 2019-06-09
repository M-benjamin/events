import React from "react";
import { createStackNavigator } from "react-navigation";
import SettingScreen from "../../screens/SettingScreen";
import { TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const SettingStack = createStackNavigator(
  {
    SettingScreen: {
      screen: SettingScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: "Setting",
        headerLeft: (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <View>
              <Icon name="md-menu" size={24} />
            </View>
          </TouchableOpacity>
        )
      })
    }
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        tabBarLabel: "Settings"
      };
    }
  }
);

export default SettingStack;
