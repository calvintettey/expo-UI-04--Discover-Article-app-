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
export default function Article2() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Image
        style={styles.storyImage}
        source={require("../../../assets/slack.jpg")}
      />
      <View style={styles.cardDetails}>
        <Text style={styles.title}>
          Slack Was Made for Businesses, But It's an Even Better Tool for
          Friends
        </Text>

        <View style={styles.writerInfo}>
          <Image
            style={styles.writerImage}
            source={require("../../../assets/slack.jpg")}
          />

          <Text style={styles.writerName}>Andrew Burmon</Text>

          <Text style={styles.readTime}> | 3 min</Text>
        </View>

        <Text style={styles.story}>
          Repurposing corporate America's killer app is as easy as inviting your
          buddies and heading over to Giphy. If you don’t already use the
          messaging app at work, you probably will. Of all the electronic
          leashes engineered for corporate America’s pets, Slack has the most
          tensile strength, which is precisely how it went from not existing to
          a [$2.8-billion valuation] in a little over a year. Here’s the thing
          about Stewart Butterfield’s little engine that did (and feel free to
          drop this link in your #general channel): It’s a better social utility
          than it is a work tool. {"\n"}
          Start a Social Slack with your friends.
          Seriously. It’s great. At it’s best, Work Slack is GIFs. Managers love
          the program because it allows them to hector their employees without
          seeming aggressive (no capital letters!), but the reason folks near
          the base of the pyramid are all in is that it allows them to mine
          Giphy. And there is gold in that hill. Sure, you can enjoy this
          functionality in the workplace, but it’s way better outside the
          confines of the office and common decency. {"\n"}
          Social Slack allows you to explore the horrifying outer limits of GIF 
          communication. In a land
          beyond censorship, the ability to embed videos and GIFs is dangerous -
          but we’re all friends here so it’s all good.. And dropping photos in
          there is great because, while you can only gently rib your boss, you
          can troll the hell out of your friends. Or just spend some quality
          time. Share a movie-watching experience remotely. React to the game.
          Group sext. Do whatever you gotta do and Social Slack will help you do
          it together.
        </Text>
      </View>
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
