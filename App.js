import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Home from "./src/tabs/Home";
import Settings from "./src/tabs/Settings";
import Profile from "./src/tabs/Profile";
import Folder from "./src/tabs/Folder";
import Heart from "./src/tabs/Heart";
import ArticleView from "./src/screens/ArticleView";
import { TouchableOpacity } from "react-native-gesture-handler";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function AllTabs() {
  return (
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
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="AllTabs"
          component={AllTabs}
        />
        <Stack.Screen
          options={({navigation})=>{
            return {
            headerTitleContainerStyle: {
              width: "48%",
            },
            headerTitleStyle: {
              // alignSelf: "left",
              fontFamily: "serif",
              fontWeight: "bold",
              fontSize: 22,
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate("AllTabs")}>
              <Ionicons
                name="ios-arrow-back"
                size={24}
                color="black"
                style={{ paddingHorizontal: 18 }}
              />
              </TouchableOpacity>
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
          }
          }}
          name="ArticleView"
          component={ArticleView}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
