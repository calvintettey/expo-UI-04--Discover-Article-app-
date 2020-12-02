import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("screen");

export default function ArticleView({
  title,
  storyImage,
  writerName,
  writerImage,
  readTime,
  story
}) {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Image style={styles.storyImage} source={storyImage} />

      <Text style={styles.title}>{title}</Text>

      <View style={styles.writerInfo}>
        <Image style={styles.writerImage} source={writerImage} />

        <Text style={styles.writerName} numberOfLines={1}>
          {writerName}
        </Text>

        <Text style={styles.readTime}>{` | ${readTime} min`}</Text>
      </View>

      <Text style={styles.story}>
        {story}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 18,
    marginBottom: 10,
  },

  storyImage: {
    height: 0.7 * width,
    width: 0.9 * width,
  },

  title: {
    fontSize: 20,
    fontFamily: "serif",
  },

  writerInfo: {
    // flex:2,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 9,
  },

  writerImage: {
    width: 35,
    height: 35,
    borderRadius: 35,
    marginRight: 10,
  },

  writerName: {
    color: "#858585",
    fontSize: 16,
    fontFamily: "serif",
  },

  readTime: {
    color: "#a3a3a3",
    fontSize: 15,
    fontFamily: "serif",
  },

  story: {
    color: "#858585",
    fontSize: 18,
    fontFamily: "serif",
  },
});
