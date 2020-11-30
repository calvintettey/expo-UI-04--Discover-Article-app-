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
      <View style={styles.cardDetails}>
        <Text style={styles.title}>{title}</Text>

        <View style={styles.writerInfo}>
          <Image style={styles.writerImage} source={writerImage} />

          <Text style={styles.writerName}>{writerName}</Text>

          <Text style={styles.readTime}>{` | ${readTime} min`}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {},
  storyImage:{
    height: 0.4 * width,
    width: 0.3 * width,
},
  cardDetails: {},
  title: {},
  writerInfo: {},
  writerImage: {},
  writerName: {},
  readTime: {},
});
