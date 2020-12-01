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
export default function Article1() {
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.storyImage}
        source={require("../../../assets/ornithologist.jpg")}
      />

      <Text style={styles.title}>
        The Ornithologist' Review: Blasphemous Fun From João Pedro Rodrigues
      </Text>

      <View style={styles.writerInfo}>
        <Image
          style={styles.writerImage}
          source={require("../../../assets/ornithologist.jpg")}
        />

        <Text style={styles.writerName}>Jay Weissberg</Text>

        <Text style={styles.readTime}> | 4 min</Text>
      </View>

      <Text style={styles.story}>
        The distinct individualism of João Pedro Rodrigues’ worldview is turned
        inward via an unflaggingly intriguing poetical riff on the life of St.
        Anthony of Padua in “The Ornithologist.” While possibly the director’s
        most accessible film to date, calling this visually striking work
        “accessible” doesn’t mean most audiences will fully understand
        Rodrigues’ delightfully meandering paths, nor appreciate his homoerotic,
        playfully blasphemous modernized hagiography. Religious conservatives
        will be as apoplectic as they were with Godard’s “Hail Mary,” but
        arthouse lovers, including those not always in sync with the “To Die
        Like a Man” helmer’s style should find much pleasure, even if they’re
        perplexed by what it all means.{"\n"}
        Interpretations will be made
        slightly easier — but only slightly — by knowing a little about both St.
        Anthony, whose birth name was Fernando, and Rodrigues. That the director
        conflates himself with the saint by literally assuming his role towards
        the end shouldn’t be seen as an exercise in self-exaltation; instead,
        it’s a way of personalizing Anthony’s influence, perhaps akin to Egon
        Schiele’s “Self-Portrait as St. Sebastian,” while having fun with
        reshaping a historical figure’s life according to fanciful imagination.
        If this sounds terribly serious, think again: “The Ornithologist” is
        deliciously subversive and genuinely funny.
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
