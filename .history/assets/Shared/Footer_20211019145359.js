import { Button } from "native-base";
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Footer() {
  return (
    <View
      style={{
        backgroundColor: "#1d2636",
        marginTop: 50,
        paddingTop: 50,
        paddingLeft: 10,
      }}
    >
      <Text
        style={{
          color: "white",
          letterSpacing: 1,
          fontWeight: "700",
          fontSize: 21,
          lineHeight: 30,
          marginBottom: 10,
        }}
      >
        Sign Up for News Letter
      </Text>
      <Text
        style={{
          color: "#afaeae",
          marginBottom: 10,
          fontSize: 14,
          fontWeight: "600",
        }}
      >
        We'll never spam or sell your details. You unsubscribe whenever you'd
        like.
      </Text>
      <Text
        style={{
          color: "white",
          marginBottom: 10,
          fontWeight: "700",
          fontSize: 21,
        }}
      >
        TOP Cities
      </Text>
      <Text
        style={{
          color: "white",
          marginBottom: 10,
          fontWeight: "700",
          fontSize: 21,
        }}
      >
        USEFULL LINKS
      </Text>
      <Button
        style={{
          width: 55,
          backgroundColor: "transparent",
          margin: 5,
        }}
      >
        Home
      </Button>
      <Button style={{ width: 100, margin: 5 }}>MLS Search</Button>
      <Button style={{ width: 85 }}>About Us</Button>
      <Button style={{ width: 95 }}>Contact Us</Button>
      <Button style={{ width: 70 }}>Sign In</Button>
      <View style={{ height: 120 }}></View>
    </View>
  );
}
