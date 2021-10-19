import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";

export default function header() {
  return (
    <View>
      <Image
        style={{ width: 200, height: 80, resizeMode: "stretch" }}
        source={require("../img/logo/logo.png")}
      />
    </View>
  );
}
