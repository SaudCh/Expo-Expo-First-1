import React from "react";
import { View, Text } from "react-native";

export default function Info() {
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontWeight: "bold" }}>SW Florida Real Estate Search</Text>
      <Text>
        Our website features the best real estate search for homes, condos, land
        and foreclosure properties available. It is the only site you will ever
        need! It is easy-to-use and updated by the official Realtor®'s database
        every 15 minutes. You can save searches, and get daily email alerts of
        new listings, price changes, sold data, and market reports. Our
        Interactive Map Search allows you to view properties on a map or refine
        your search by drawing the boundaries around the area you desire.
      </Text>
      <View style={{ height: 300 }}></View>
    </View>
  );
}
