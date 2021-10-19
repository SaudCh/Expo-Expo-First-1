import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button } from "native-base";
import { justifyContent, textAlign } from "styled-system";

export default function Info() {
  return (
    <View>
      <View style={{ padding: 10 }}>
        <Text style={{ ...styles.InfoHeading }}>
          SW Florida Real Estate Search
        </Text>
        <Text style={{ ...styles.InfoText }}>
          Our website features the best real estate search for homes, condos,
          land and foreclosure properties available. It is the only site you
          will ever need! It is easy-to-use and updated by the official
          Realtor®'s database every 15 minutes.{"\n"}
          You can save searches, and get daily email alerts of new listings,
          price changes, sold data, and market reports. Our Interactive Map
          Search allows you to view properties on a map or refine your search by
          drawing the boundaries around the area you desire.
        </Text>
        <Image
          source={require("../img/info-img.jpg")}
          style={{ ...styles.InfoImage }}
        />
        <View
          style={{ ...styles.InfoNumberContainer, alignItems: "flex-start" }}
        >
          <View
            style={{
              ...styles.InfoNumber,
              backgroundColor: "rgba(255, 152, 0,0.1)",
            }}
          >
            <Text style={{ ...styles.InfoNumberText, color: "#ff9800" }}>
              01
            </Text>
          </View>
        </View>
        <Text style={{ ...styles.InfoHeading }}>Buying A SW Florida Home</Text>
        <Text style={{ ...styles.InfoText }}>
          Fabulous new homes come on the market every day in SW Florida and many
          are sold before they've even been advertised. If you're looking for
          real estate in this area, you can beat other home buyers to the
          hottest new homes on the market by following these steps:
        </Text>
        <Button>Read More</Button>
        <Image
          source={require("../img/info-img-1.jpg")}
          style={{ ...styles.InfoImage }}
        />
        <View style={{ ...styles.InfoNumberContainer, alignItems: "flex-end" }}>
          <View
            style={{
              ...styles.InfoNumber,
              backgroundColor: "rgba(7, 173, 89,0.1)",
            }}
          >
            <Text style={{ ...styles.InfoNumberText, color: "#07ad59" }}>
              02
            </Text>
          </View>
        </View>
        <Text style={{ ...styles.InfoHeading }}>
          Free Home Evaluation For Home Sellers
        </Text>
        <Text style={{ ...styles.InfoText }}>
          Request a free home evaluation, A well-priced home will generate
          competing offers and drive up the final sale value. Our free market
          analysis takes into account currently listed and sold comparable homes
          in your area and provides you with a detailed evaluation that puts it
          all in perspective.
        </Text>
        <Button>Read More</Button>
        <Image
          source={require("../img/info-img.jpg")}
          style={{ ...styles.InfoImage }}
        />
      </View>
      <View style={{ ...styles.contactUs }}>
        <View style={{ marginBottom: 15 }}>
          <Text
            style={{
              lineHeight: 30,
              fontSize: 24,
              fontWeight: "bold",
              color: "white",
              marginBottom: 5,
            }}
          >
            Do You Have Questions?
          </Text>
          <Text
            style={{
              lineHeight: 30,
              fontSize: 20,
              fontWeight: "600",
              color: "white",
            }}
          >
            Call Our Office: (239) 992-9119
          </Text>
        </View>
        <Button
          style={{
            backgroundColor: "white",
            height: 50,
            borderRadius: 100,
            width: "50%",
          }}
        >
          <Text>Contact Us Today</Text>
        </Button>
      </View>
      <View style={{ height: 150 }}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  InfoHeading: {
    fontWeight: "bold",
    fontSize: 30,
    lineHeight: 36,
  },
  InfoText: {
    fontSize: 18,
    lineHeight: 28,
  },
  InfoImage: {
    width: "90%",
    height: 300,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: "center",
  },
  InfoNumber: {
    width: 80,
    height: 80,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    borderRadius: 40,
    borderTopLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  InfoNumberText: {
    fontSize: 28,
    fontWeight: "700",
  },
  InfoNumberContainer: {
    margin: 20,
  },
  contactUs: {
    backgroundColor: "#09AFFF",
    height: 200,
    justifyContent: "center",
    paddingLeft: 30,
  },
});
