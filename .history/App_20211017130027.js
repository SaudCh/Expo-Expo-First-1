import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import Header from "./assets/Shared/header";
import { AntDesign } from "@expo/vector-icons";

export default function App() {
  return (
    <View>
      <Header />
      <View style={styles.featureCityContainer}>
        <AntDesign name="staro" size={24} color="black" />
        <Text style={styles.featureCityText}>Feature City</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  featureCityText: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
