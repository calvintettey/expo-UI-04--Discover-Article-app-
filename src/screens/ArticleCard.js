import React from "react";
import { View, Image, StyleSheet, Text, Dimensions } from "react-native";

const { width } = Dimensions.get("screen");
export default function ArticleCard({
  title,
  storyImage,
  writerName,
  writerImage,
  readTime,
}) {
  return (
    <View style={styles.card}>
      <Image style={styles.storyImage} source={storyImage} />
      <View style={styles.storyDetails}>
        <Text style={styles.title}>{title}</Text>

        <View style={styles.writerInfo}>
          <Image style={styles.writerImage} source={writerImage} />

          <Text style={styles.writerName} numberOfLines={1}>{writerName}</Text>

          <Text style={styles.readTime}>{` | ${readTime} min`}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    marginHorizontal: 0.03 * width,
    height: 0.45 * width,
    backgroundColor:"#fff",
    marginBottom: 0.01 * width,
    marginTop: 0.04 * width
  },
  storyImage: {
    height: 0.39 * width,
    width: 0.28 * width,
  },
  storyDetails: {
    justifyContent: "space-between",
    backgroundColor: "white",
    height: 0.39 * width,
    width: 0.62 * width,
    paddingLeft: 13,
  },
  title: {
    fontSize: 20,
    fontFamily: "serif",
  },

  writerInfo: {
    // flex:2,
    flexDirection: "row",
    alignItems: "center",
    // marginVertical: 20,S
  },

  writerImage: {
    width: 30,
    height: 30,
    borderRadius: 30,
    marginRight: 8,
  },

  writerName: {
    color: "#858585",
    fontSize: 15,
    fontFamily: "serif",
    width: 0.3 * width,
  },

  readTime: {
    color: "#a3a3a3",
    fontSize: 14,
    fontFamily: "serif",
  },
});
