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
export default function Article3() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.storyImage}
        source={require("../../../assets/politician.jpg")}
      />
      <View style={styles.cardDetails}>
        <Text style={styles.title}>
          The Politician is a ’90s throwback of a Gen-X political message but
          about Gen Zers
        </Text>

        <View style={styles.writerInfo}>
          <Image
            style={styles.writerImage}
            source={require("../../../assets/politician.jpg")}
          />

          <Text style={styles.writerName}>Emily VanDerWerff</Text>

          <Text style={styles.readTime}> | 4 min</Text>
        </View>

        <Text style={styles.story}>
          The Politician is Murphy’s first show to debut on Netflix instead of
          FX or Fox, his longtime TV homes (however, it’s not his first show
          under his new exclusive deal with Netflix — instead, it’s one of the
          last shows he produced under his old deal with Fox). In form, it most
          resembles Glee, with acidic comedy about high schoolers that pushes
          subject matter envelopes while remaining more or less family friendly.
          There’s no overt sexual content beyond kissing, but there’s plenty of
          implied sexual content.
          {"\n"}
          {"\n"}
          There’s a large ensemble cast, featuring everybody from superstars
          (Gwyneth Paltrow) to Broadway stars making their big TV-starring debut
          (Dear Evan Hansen’s Ben Platt) to total unknowns who are,
          nevertheless, perfectly cast (the agreeably icy Julia Schlaepfer).
          There are wild tonal swings from arch irony to utter sincerity,
          sometimes within single lines of dialogue. And there are occasional
          musical numbers. You don’t hire Ben Platt and not ask him to sing.
          {"\n"}
          {"\n"}
          In fact, The Politician might be the Rosetta Stone to understanding
          all of Murphy’s work, from Nip/Tuck to Glee to American Horror Story
          to American Crime Story. It’s a show about what it means to be queer
          and have to stifle that part of yourself to survive. It’s a show about
          what happens when an entire culture decides that some voices matter
          more than others, even if those voices belong to empty suits. It’s
          also kind of a mess.
          {"\n"}
          {"\n"}
          What’s oddest about The Politician is that it has almost no interest
          in actual politics. Payton — who occasionally seems to be a rough
          analog for gun control activist David Hogg and at other times seems
          like Alexandria Ocasio-Cortez reimagined as an anodyne white man —
          makes occasional stabs at caring about political issues. He wants
          students to be safe from gun violence but he’s also really worried
          about plastic straws. He seems to have arrived at his political
          positions because they are advantageous, not because the issues he’s
          chosen to focus on are deeply important to him. And yet other
          characters earnestly intone several times that he wants to make the
          world a better place.
        </Text>
      </View>
    </View>
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
