import React from "react";
import {
  createDrawerNavigator,
  createStackNavigator,
  createBottomTabNavigator,
  DrawerItems
} from "react-navigation";
import {
  TouchableOpacity,
  View,
  Text,
  AsyncStorage,
  SafeAreaView
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import HomeStack from "./stacks/HomeStack";
import SettingStack from "./stacks/SettingsStacks";
import HomeScreen from "../screens/home/HomeScreen";
import { Button } from "native-base";
import { ScrollView } from "react-native-gesture-handler";

// const AppTabNavigator = createBottomTabNavigator(
//   {
//     HomeStack,
//     SettingStack
//   },
//   {
//     navigationOptions: ({ navigation }) => {
//       const { routeName } = navigation.state.routes[navigation.state.index];
//       return {
//         headerTitle: routeName,
//         header: null
//       };
//     }
//   }
// );
const CustomDrawer = props => (
  <SafeAreaView>
    <View style={{ height: 150, backgroundColor: "red" }} />
    <ScrollView>
      <DrawerItems {...props} />
      <TouchableOpacity
        onPress={async () => {
          await AsyncStorage.clear();
          props.navigation.navigate("AuthLoading");
        }}
      >
        <Text>Sign out</Text>
      </TouchableOpacity>
    </ScrollView>
  </SafeAreaView>
);

const AppStackNavigator = createStackNavigator({
  AppTabNavigator: {
    screen: HomeStack,
    navigationOptions: ({ navigation }) => ({
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <View>
            <Icon name="md-menu" size={24} />
          </View>
        </TouchableOpacity>
      )
    })
  }
});

const appDrawerNavigation = createDrawerNavigator(
  {
    Home: AppStackNavigator
  },
  {
    contentComponent: CustomDrawer,
    contentOptions: {
      activeTintColor: "orange"
    }
  }
);

export default appDrawerNavigation;
