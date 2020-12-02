import * as React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import ArticleList from "../screens/ArticleList";

const HomeStack = createStackNavigator();
export default function Home() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        options={{
          headerTitleStyle: {
            alignSelf: "center",
            fontFamily: "serif",
            fontWeight: "bold",
            fontSize: 30,
          },
          headerLeft: () => (
            <Fontisto
              name="nav-icon-grid-a"
              size={24}
              color="black"
              style={{ paddingHorizontal: 18 }}
            />
          ),
          headerRight: () => (
            <Ionicons
              name="md-search"
              size={30}
              color="black"
              style={{ paddingHorizontal: 18 }}
            />
          ),
        }}
        name="Discover"
        component={ArticleList}
      />
    </HomeStack.Navigator>
  );
}
