import React from "react";
import { View, Text } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import ArticleCard from "./ArticleCard";

export default function ArticleList({ route, navigation }) {
  const articles = [
    {
      title:
        "'The Ornithologist' Review: Blasphemous Fun From João Pedro Rodrigues",
      storyImage: require("../../assets/ornithologist.jpg"),
      writerName: "Jay Weissberg",
      writerImage: require("../../assets/newfilm.jpg"),
      readTime: "4",
      story:
        "The distinct individualism of João Pedro Rodrigues’ worldview is turned inward via an unflaggingly intriguing poetical riff on the life of St.Anthony of Padua in “The Ornithologist.” While possibly the director’s most accessible film to date, calling this visually striking work “accessible” doesn’t mean most audiences will fully understand Rodrigues’ delightfully meandering paths, nor appreciate his homoerotic, playfully blasphemous modernized hagiography. Religious conservatives will be as apoplectic as they were with Godard’s “Hail Mary,” but arthouse lovers, including those not always in sync with the “To Die Like a Man” helmer’s style should find much pleasure, even if they’re perplexed by what it all means. Interpretations will be made slightly easier — but only slightly — by knowing a little about both St.  Anthony, whose birth name was Fernando, and Rodrigues. That the director conflates himself with the saint by literally assuming his role towards the end shouldn’t be seen as an exercise in self-exaltation; instead, it’s a way of personalizing Anthony’s influence, perhaps akin to Egon Schiele’s “Self-Portrait as St. Sebastian,” while having fun with reshaping a historical figure’s life according to fanciful imagination. If this sounds terribly serious, think again: “The Ornithologist” is deliciously subversive and genuinely funny.",
    },
    {
      title:
        "Slack Was Made for Businesses, But It's an Even Better Tool for Friends",
      storyImage: require("../../assets/slack.jpg"),
      writerName: "Andrew Burmon",
      writerImage: require("../../assets/newfilm.jpg"),
      readTime: "3",
      story:
        "Repurposing corporate America's killer app is as easy as inviting your buddies and heading over to Giphy. If you don’t already use the messaging app at work, you probably will. Of all the electronic leashes engineered for corporate America’s pets, Slack has the most tensile strength, which is precisely how it went from not existing to a [$2.8-billion valuation] in a little over a year. Here’s the thing about Stewart Butterfield’s little engine that did (and feel free to drop this link in your #general channel): It’s a better social utility than it is a work tool. Start a Social Slack with your friends. Seriously. It’s great. At it’s best, Work Slack is GIFs. Managers love the program because it allows them to hector their employees without seeming aggressive (no capital letters!), but the reason folks near the base of the pyramid are all in is that it allows them to mine Giphy. And there is gold in that hill. Sure, you can enjoy this functionality in the workplace, but it’s way better outside the confines of the office and common decency. Social Slack allows you to explore the horrifying outer limits of GIF communication. In a land beyond censorship, the ability to embed videos and GIFs is dangerous - but we’re all friends here so it’s all good.. And dropping photos in there is great because, while you can only gently rib your boss, you can troll the hell out of your friends. Or just spend some quality time. Share a movie-watching experience remotely. React to the game. Group sext. Do whatever you gotta do and Social Slack will help you do it together.",
    },
    {
      title:
        "The Politician is a ’90s throwback of a Gen-X political message but about Gen Zers",
      storyImage: require("../../assets/politician.jpg"),
      writerName: "Emily VanDerWerff",
      writerImage: require("../../assets/newfilm.jpg"),
      readTime: "4",
      story:
        "The Politician is Murphy’s first show to debut on Netflix instead of FX or Fox, his longtime TV homes (however, it’s not his first show under his new exclusive deal with Netflix — instead, it’s one of the last shows he produced under his old deal with Fox). In form, it most resembles Glee, with acidic comedy about high schoolers that pushes subject matter envelopes while remaining more or less family friendly. There’s no overt sexual content beyond kissing, but there’s plenty of implied sexual content. There’s a large ensemble cast, featuring everybody from superstars (Gwyneth Paltrow) to Broadway stars making their big TV-starring debut (Dear Evan Hansen’s Ben Platt) to total unknowns who are, nevertheless, perfectly cast (the agreeably icy Julia Schlaepfer). There are wild tonal swings from arch irony to utter sincerity, sometimes within single lines of dialogue. And there are occasional musical numbers. You don’t hire Ben Platt and not ask him to sing. In fact, The Politician might be the Rosetta Stone to understanding all of Murphy’s work, from Nip/Tuck to Glee to American Horror Story to American Crime Story. It’s a show about what it means to be queer and have to stifle that part of yourself to survive. It’s a show about what happens when an entire culture decides that some voices matter more than others, even if those voices belong to empty suits. It’s also kind of a mess. What’s oddest about The Politician is that it has almost no interest in actual politics. Payton — who occasionally seems to be a rough analog for gun control activist David Hogg and at other times seems like Alexandria Ocasio-Cortez reimagined as an anodyne white man — makes occasional stabs at caring about political issues. He wants students to be safe from gun violence but he’s also really worried about plastic straws. He seems to have arrived at his political positions because they are advantageous, not because the issues he’s chosen to focus on are deeply important to him. And yet other characters earnestly intone several times that he wants to make the world a better place.",
    },
    {
      title: "TV is Not the New Film",
      storyImage: require("../../assets/newfilm.jpg"),
      writerName: "Mike S. Ryan",
      writerImage: require("../../assets/newfilm.jpg"),
      readTime: "6",
      story:
        "As much as I love *Breaking Bad, The Wire, Mad Men* and *Twin Peaks*, as great and as groundbreaking as those shows were, they still are not cinema. The recent explosion of quality long-form cable series has taken the TV form to a new level of artistry and craftsmanship. A show like *Mad Men* is not only thrilling because of its commentary on its era, but because of the zeitgeist energy created by everyone watching the show, talking about it and sharing opinions on social media. Today, perhaps more than ever, a new season of a quality show becomes a cultural event. Combine that with journalism‘s “recap culture,” in which newspapers, magazines and websites devote pages to summaries of the prior night‘s shows — all the while shrinking or even eliminating film reviews — and it’s pretty easy to understand why cinema feels somewhat inadequate in comparison. Consequently, in all of the excitement over this grand new Golden Age of episodic television, we seem to have forgotten what is unique and singular to the medium of film. Some of us have lost faith in the medium completely and moved on to the search for alternate forms of storytelling, like transmedia. Others have fully embraced the idea that most young people are only comfortable in the short attention span space of Vimeo video clips. Furthermore, while there used to be a time when unpopular or taboo subjects, settings or perspectives could only be found at the movies, these days there is no subject matter off limits to TV. A positive comedy about an atheist, multiracial, LGBTA, off-the-grid, anarchist free-love family would be no problem these days for any TV network. Back before cable TV, when the advertisers needed to approve the content, it was only in film that taboo subjects and characters could be explored; today, Last Tango in Paris could be pitched as a cable production. With television co-opting cultural conversation and provocative content, the feature film format is indeed under assault. But, like the novel — which was in free fall in the early ’50s due to the emergence of TV — the form will continue and, in time, a new appreciation of its unique qualities will emerge. If your intent as a creator is primarily to tell stories and engage a mass audience, then I think it has become clear that there are more, possibly better mediums for you than cinema. But if you call yourself a filmmaker or a film lover, then you should be someone invested in the specific qualities of the cinematic medium. In this current time of transition, as new mediums and new lifestyle habits are being formed, we as filmmakers and film lovers need to assert cinema’s position in the crowded visual entertainment landscape.Quite simply, we need to assert the unique qualities of the feature film format, qualities that make it distinctive from all other mediums. Like an old married couple looking to renew their vows, it may be time for us film lovers to restate the reason why we fell in love with the form to begin with. And if there is no distinction between film and television when it comes to subject matter and characters, then that means the distinction must be found in form, not content. Hopefully, listing these aspects that differentiate film from television will give you a reason to make a film — or to simply go out to your local theater, buy a ticket and enjoy the uninterrupted darkness.",
    },
  ];

  return (
    <View>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("ArticleView", item)}>
            <ArticleCard {...item} />
          </TouchableOpacity>
        )}
        keyExtractor={(title, writerName, readTime) =>
          title + writerName + readTime
        }
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
