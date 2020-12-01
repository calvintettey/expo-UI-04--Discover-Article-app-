import React from "react";
import { View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ArticleCard from "./ArticleCard";

export default function ArticleList() {
  const articles = [
    {
      title:
        "'The Ornithologist' Review: Blasphemous Fun From João Pedro Rodrigues",
      storyImage: require("../../assets/ornithologist.jpg"),
      writerName: "Jay Weissberg",
      writerImage: require("../../assets/newfilm.jpg"),
      readTime: "4",
    },
    {
      title:
        "Slack Was Made for Businesses, But It's an Even Better Tool for Friends",
      storyImage: require("../../assets/slack.jpg"),
      writerName: "Andrew Burmon",
      writerImage: require("../../assets/newfilm.jpg"),
      readTime: "3",
    },
    {
      title:
        "The Politician is a ’90s throwback of a Gen-X political message but about Gen Zers",
      storyImage: require("../../assets/politician.jpg"),
      writerName: "Emily VanDerWerff",
      writerImage: require("../../assets/newfilm.jpg"),
      readTime: "4",
    },
    {
      title: "TV is Not the New Film",
      storyImage: require("../../assets/newfilm.jpg"),
      writerName: "Mike S. Ryan",
      writerImage: require("../../assets/newfilm.jpg"),
      readTime: "6",
    },
  ];

  return (
    <View>
      <FlatList
        data={articles}
        renderItem={({ item }) => <ArticleCard {...item} />}
        keyExtractor={(title, writerName, readTime) =>
          title + writerName + readTime
        }
        showsVerticalScrollIndicator={false}
        
      />
    </View>
  );
}
