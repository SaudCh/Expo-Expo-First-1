import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Footer() {
  return (
    <View style={{ backgroundColor: "#1d2636" }}>
      <Text>Sign Up for News Letter</Text>
      <Text>
        We'll never spam or sell your details. You unsubscribe whenever you'd
        like.
      </Text>
      <Text>TOP Cities</Text>
      <Text>USEFULL LINKS</Text>
      <Text>
        Home {"\n"}MLS Search {"\n"}About Us {"\n"}Contact Us {"\n"}Sign In
      </Text>
    </View>
  );
}
