import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";

export default function header() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.stretch}
        source={require("../img/First_1_team_New_Logo_Alt.jpeg")}
      />
      <StatusBar style="auto" />
    </View>
  );
}
