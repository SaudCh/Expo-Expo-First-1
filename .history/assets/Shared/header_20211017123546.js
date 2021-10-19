import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";

export default function header() {
  return (
    <View>
      <Image
        style={{ width: 200, height: 80 }}
        source={require("../img/First_1_team_New_Logo_Alt.jpeg")}
      />
    </View>
  );
}
