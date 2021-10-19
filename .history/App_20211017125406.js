import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import Header from "./assets/Shared/header";

export default function App() {
  return (
    <View>
      <Header />
      <Text style={styles.featureCityText}>Feature City</Text>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  featureCityText: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
  },
});
