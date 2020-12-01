import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import DiscoverPage from "./src/screens/DiscoverPage";
import Article1 from "./src/screens/articles/Article1";
import Article2 from "./src/screens/articles/Article2";
import Article3 from "./src/screens/articles/Article3";
import Article4 from "./src/screens/articles/Article4";
import Home from "./src/tabs/Home";
import Settings from "./src/tabs/Settings";
import Profile from "./src/tabs/Profile";
import Folder from "./src/tabs/Folder";
import Heart from "./src/tabs/Heart";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Tab.Navigator>
        <Tab.Screen name="Home" component={DiscoverPage} />
        <Tab.Screen name="Folder" component={Folder} />
        <Tab.Screen name="Heart" component={Heart} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
      {/* <Stack.Navigator initialRouteName="Discover">
        <Stack.Screen
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
          component={DiscoverPage}
        />

        <Stack.Screen
          options={{
            headerTitleStyle: {
              // alignSelf: "left",
              fontFamily: "serif",
              fontWeight: "bold",
              fontSize: 22,
            },
            headerLeft: () => (
              <Ionicons
                name="ios-arrow-back"
                size={24}
                color="black"
                style={{ paddingHorizontal: 18 }}
              />
            ),
            headerRight: () => (
              <View style={{ flexDirection: "row" }}>
                <Feather
                  name="headphones"
                  size={24}
                  color="black"
                  style={{ paddingRight: 15 }}
                />
                <Ionicons
                  name="md-heart-empty"
                  size={28}
                  color="black"
                  style={{ paddingRight: 15 }}
                />
                <Feather
                  name="share-2"
                  size={24}
                  color="black"
                  style={{ paddingRight: 18 }}
                />
              </View>
            ),
          }}
          name="Cinema"
          component={Article1}
        />

        <Stack.Screen
          options={{
            headerTitleStyle: {
              // alignSelf: "left",
              fontFamily: "serif",
              fontWeight: "bold",
              fontSize: 22,
            },
            headerLeft: () => (
              <Ionicons
                name="ios-arrow-back"
                size={24}
                color="black"
                style={{ paddingHorizontal: 18 }}
              />
            ),
            headerRight: () => (
              <View style={{ flexDirection: "row" }}>
                <Feather
                  name="headphones"
                  size={24}
                  color="black"
                  style={{ paddingRight: 15 }}
                />
                <Ionicons
                  name="md-heart-empty"
                  size={28}
                  color="black"
                  style={{ paddingRight: 15 }}
                />
                <Feather
                  name="share-2"
                  size={24}
                  color="black"
                  style={{ paddingRight: 18 }}
                />
              </View>
            ),
          }}
          name="Article2"
          component={Article2}
        />

        <Stack.Screen
          options={{
            headerTitleStyle: {
              // alignSelf: "left",
              fontFamily: "serif",
              fontWeight: "bold",
              fontSize: 22,
            },
            headerLeft: () => (
              <Ionicons
                name="ios-arrow-back"
                size={24}
                color="black"
                style={{ paddingHorizontal: 18 }}
              />
            ),
            headerRight: () => (
              <View style={{ flexDirection: "row" }}>
                <Feather
                  name="headphones"
                  size={24}
                  color="black"
                  style={{ paddingRight: 15 }}
                />
                <Ionicons
                  name="md-heart-empty"
                  size={28}
                  color="black"
                  style={{ paddingRight: 15 }}
                />
                <Feather
                  name="share-2"
                  size={24}
                  color="black"
                  style={{ paddingRight: 18 }}
                />
              </View>
            ),
          }}
          name="Article3"
          component={Article3}
        />
        <Stack.Screen
          options={{
            headerTitleStyle: {
              // alignSelf: "left",
              fontFamily: "serif",
              fontWeight: "bold",
              fontSize: 22,
            },
            headerLeft: () => (
              <Ionicons
                name="ios-arrow-back"
                size={24}
                color="black"
                style={{ paddingHorizontal: 18 }}
              />
            ),
            headerRight: () => (
              <View style={{ flexDirection: "row" }}>
                <Feather
                  name="headphones"
                  size={24}
                  color="black"
                  style={{ paddingRight: 15 }}
                />
                <Ionicons
                  name="md-heart-empty"
                  size={28}
                  color="black"
                  style={{ paddingRight: 15 }}
                />
                <Feather
                  name="share-2"
                  size={24}
                  color="black"
                  style={{ paddingRight: 18 }}
                />
              </View>
            ),
          }}
          name="Article4"
          component={Article4}
          style={{ paddingHorizontal: 18 }}
        />
      </Stack.Navigator> */}

     

    </NavigationContainer>

    
    // <ScrollView showsVerticalScrollIndicator={false}>
    //   <DiscoverPage />

    //   {/* <Article1 /> */}

    //   {/* <Article2/> */}

    //   {/* <Article3/> */}

    //   {/* <Article4/> */}

    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
