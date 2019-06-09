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
import { ScrollView } from "react-native-gesture-handler";

import styled from "styled-components";

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
    <View
      style={{
        height: 100,
        backgroundColor: "#653b01",
        alignContent: "center",
        justifyContent: "center"
      }}
    >
      <Logo source={require("../assets/history.png")} />
    </View>
    <ScrollView>
      <DrawerItems {...props} />
      <TouchableOpacity
        onPress={async () => {
          await AsyncStorage.clear();
          props.navigation.navigate("Login");
        }}
      >
        <View style={{ display: "flex", flexDirection: "row", marginLeft: 10 }}>
          <Icon name="md-log-in" style={{ fontSize: 25, marginRight: 5 }} />
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Sign out</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  </SafeAreaView>
);

const Logo = styled.Image`
  width: 100px;
  height: 100px;
  margin-top: 50px;
`;

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
