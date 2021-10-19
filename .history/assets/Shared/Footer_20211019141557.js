import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Footer() {
  return (
    <View style={{ backgroundColor: "#1d2636", marginTop: 50 }}>
      <Text
        style={{
          color: "white",
          letterSpacing: 1,
          fontWeight: "700",
          fontSize: 21,
          lineHeight: 30,
        }}
      >
        Sign Up for News Letter
      </Text>
      <Text style={{ color: "#afaeae" }}>
        We'll never spam or sell your details. You unsubscribe whenever you'd
        like.
      </Text>
      <Text style={{ color: "white" }}>TOP Cities</Text>
      <Text style={{ color: "white" }}>USEFULL LINKS</Text>
      <Text style={{ color: "#afaeae" }}>
        Home {"\n"}MLS Search {"\n"}About Us {"\n"}Contact Us {"\n"}Sign In
      </Text>
    </View>
  );
}
