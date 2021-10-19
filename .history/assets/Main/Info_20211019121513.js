import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "native-base";

export default function Info() {
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ ...styles.InfoHeading }}>
        SW Florida Real Estate Search
      </Text>
      <Text style={{ ...styles.InfoText }}>
        Our website features the best real estate search for homes, condos, land
        and foreclosure properties available. It is the only site you will ever
        need! It is easy-to-use and updated by the official Realtor®'s database
        every 15 minutes. ~{"\n"}
        You can save searches, and get daily email alerts of new listings, price
        changes, sold data, and market reports. Our Interactive Map Search
        allows you to view properties on a map or refine your search by drawing
        the boundaries around the area you desire.
      </Text>

      <Text style={{ ...styles.InfoHeading }}>Buying A SW Florida Home</Text>
      <Text style={{ ...styles.InfoText }}>
        Fabulous new homes come on the market every day in SW Florida and many
        are sold before they've even been advertised. If you're looking for real
        estate in this area, you can beat other home buyers to the hottest new
        homes on the market by following these steps:
      </Text>
      <Button>Read More</Button>
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
      <Text style={{ ...styles.InfoHeading }}></Text>
      <Text style={{ ...styles.InfoText }}></Text>
      <View style={{ height: 300 }}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  InfoHeading: {
    fontWeight: "bold",
    fontSize: 25,
  },
  InfoText: {},
});
