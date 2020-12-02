import * as React from "react";
import { Text, View, Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Article3 from "../screens/articles/Article3";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const { width } = Dimensions.get("screen");

const ProfileStack = createStackNavigator({navigate});

export default function Profile() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        options={{
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
            <Ionicons
              onPress={() => navigation.goBack("Home")}
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
        name="The Politician Review"
        component={Article3}
      />
    </ProfileStack.Navigator>
  );
}
