import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.stretch}
        source={require("./assets/img/First_1_team_New_Logo_Alt.jpeg")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
