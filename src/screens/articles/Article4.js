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

export default function Article4() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.storyImage}
        source={require("../../../assets/newfilm.jpg")}
      />
      <View style={styles.cardDetails}>
        <Text style={styles.title}>TV is Not the New Film</Text>

        <View style={styles.writerInfo}>
          <Image
            style={styles.writerImage}
            source={require("../../../assets/newfilm.jpg")}
          />

          <Text style={styles.writerName}>Mike S. Ryan</Text>

          <Text style={styles.readTime}> | 6 min</Text>
        </View>

        <Text style={styles.story}>
          As much as I love *Breaking Bad, The Wire, Mad Men* and *Twin Peaks*,
          as great and as groundbreaking as those shows were, they still are not
          cinema. The recent explosion of quality long-form cable series has
          taken the TV form to a new level of artistry and craftsmanship. A show
          like *Mad Men* is not only thrilling because of its commentary on its
          era, but because of the zeitgeist energy created by everyone watching
          the show, talking about it and sharing opinions on social media.
          Today, perhaps more than ever, a new season of a quality show becomes
          a cultural event. Combine that with journalism‘s “recap culture,” in
          which newspapers, magazines and websites devote pages to summaries of
          the prior night‘s shows — all the while shrinking or even eliminating
          film reviews — and it’s pretty easy to understand why cinema feels
          somewhat inadequate in comparison.
          {"\n"}
          {"\n"}
          Consequently, in all of the excitement over this grand new Golden Age
          of episodic television, we seem to have forgotten what is unique and
          singular to the medium of film. Some of us have lost faith in the
          medium completely and moved on to the search for alternate forms of
          storytelling, like transmedia. Others have fully embraced the idea
          that most young people are only comfortable in the short attention
          span space of Vimeo video clips.
          {"\n"}
          {"\n"}
          Furthermore, while there used to be a time when unpopular or taboo
          subjects, settings or perspectives could only be found at the movies,
          these days there is no subject matter off limits to TV. A positive
          comedy about an atheist, multiracial, LGBTA, off-the-grid, anarchist
          free-love family would be no problem these days for any TV network.
          Back before cable TV, when the advertisers needed to approve the
          content, it was only in film that taboo subjects and characters could
          be explored; today, Last Tango in Paris could be pitched as a cable
          series.
          {"\n"}
          {"\n"}
          With television co-opting cultural conversation and provocative
          content, the feature film format is indeed under assault. But, like
          the novel — which was in free fall in the early ’50s due to the
          emergence of TV — the form will continue and, in time, a new
          appreciation of its unique qualities will emerge. If your intent as a
          creator is primarily to tell stories and engage a mass audience, then
          I think it has become clear that there are more, possibly better
          mediums for you than cinema. But if you call yourself a filmmaker or a
          film lover, then you should be someone invested in the specific
          qualities of the cinematic medium. In this current time of transition,
          as new mediums and new lifestyle habits are being formed, we as
          filmmakers and film lovers need to assert cinema’s position in the
          crowded visual entertainment landscape.
          {"\n"}
          {"\n"}
          Quite simply, we need to assert the unique qualities of the feature
          film format, qualities that make it distinctive from all other
          mediums. Like an old married couple looking to renew their vows, it
          may be time for us film lovers to restate the reason why we fell in
          love with the form to begin with. And if there is no distinction
          between film and television when it comes to subject matter and
          characters, then that means the distinction must be found in form, not
          content. Hopefully, listing these aspects that differentiate film from
          television will give you a reason to make a film — or to simply go out
          to your local theater, buy a ticket and enjoy the uninterrupted
          darkness.
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
    marginVertical: 20,
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
