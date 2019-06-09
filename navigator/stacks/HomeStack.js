import React from "react";
import { createStackNavigator } from "react-navigation";
import DetailScreen from "../../screens/home/DetailScreen";
import HomeScreen from "../../screens/home/HomeScreen";
import { TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const HomeStack = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: "Home",
        headerLeft: (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <View style={{ padding: 10 }}>
              <Icon name="md-menu" size={24} />
            </View>
          </TouchableOpacity>
        ),
        drawerLabel: "Ho",
        drawerIcon: ({ tintColor }) => (
          <Icon name="md-home" style={{ fontSize: 50, color: "red" }} />
        )
      })
    },
    DetailScreen: {
      screen: DetailScreen
    }
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        header: null
        // tabBarLabel: "Home"
      };
    }
  }
);

export default HomeStack;
