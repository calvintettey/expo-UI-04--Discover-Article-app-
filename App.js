import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import DiscoverPage from "./src/screens/DiscoverPage";
import Article1 from "./src/screens/articles/Article1";
import Article2 from "./src/screens/articles/Article2";
import Article3 from "./src/screens/articles/Article3";
import Article4 from "./src/screens/articles/Article4";

const Stack = createStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Discover Page" >
    //     <Stack.Screen name="Discover Page" component={DiscoverPage} />
    //     <Stack.Screen name="Article" component={Article} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <ScrollView showsVerticalScrollIndicator={false}>
      <DiscoverPage />

      {/* <Article1 /> */}

      {/* <Article2/> */}

      {/* <Article3/> */}

      {/* <Article4/> */}

    </ScrollView>
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
