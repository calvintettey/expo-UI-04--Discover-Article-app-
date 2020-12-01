import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Home from "./src/tabs/Home";
import Settings from "./src/tabs/Settings";
import Profile from "./src/tabs/Profile";
import Folder from "./src/tabs/Folder";
import Heart from "./src/tabs/Heart";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Folder") {
              iconName = "folderopen";
            } else if (route.name === "Heart") {
              iconName = "hearto";
            } else if (route.name === "Profile") {
              iconName = "user";
            } else if (route.name === "Settings") {
              iconName = "setting";
            }

            return <AntDesign name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#e3669f",
          inactiveTintColor: "gray",
          showLabel: false,
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Folder" component={Folder} />
        <Tab.Screen name="Heart" component={Heart} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
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
