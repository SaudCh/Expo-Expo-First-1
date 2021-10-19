import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Footer() {
  return (
    <View style={{ backgroundColor: "#1d2636", color: "white" }}>
      <Text style={{ color: "white" }}>Sign Up for News Letter</Text>
      <Text style={{ color: "white" }}>
        We'll never spam or sell your details. You unsubscribe whenever you'd
        like.
      </Text>
      <Text style={{ color: "white" }}>TOP Cities</Text>
      <Text style={{ color: "white" }}>USEFULL LINKS</Text>
      <Text style={{ color: "white" }}>
        Home {"\n"}MLS Search {"\n"}About Us {"\n"}Contact Us {"\n"}Sign In
      </Text>
    </View>
  );
}
