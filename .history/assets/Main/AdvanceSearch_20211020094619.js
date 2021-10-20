import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { fontWeight } from "styled-system";
import Header from "../Shared/header";

export default function AdvanceSearch() {
  return (
    <View>
      <Header />
      <View style={{ ...styles.container }}>
        <Text style={{ ...styles.Heading }}>Advance MLS Search</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginTop: 20,
    paddingTop: 20,
    paddingLeft: 20,
    backgroundColor: "white",
    borderRadius: 20,
  },
  Heading: {
    fontSize: 25,
    lineHeight: 36,
    marginBottom: 10,
    fontWeight: "700",
  },
});
