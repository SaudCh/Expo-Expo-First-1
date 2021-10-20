import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input, NativeBaseProvider } from "native-base";
import Header from "../Shared/header";

export default function AdvanceSearch() {
  return (
    <NativeBaseProvider>
      <View>
        <Header />
        <View style={{ ...styles.container }}>
          <Text style={{ ...styles.Heading }}>Advance MLS Search</Text>
          <Text style={{ ...styles.Heading }}>Quick Search</Text>
          <Input
            isFullWidth="false"
            style={styles.SearchBar}
            placeholder="Enter a community, Addreess or Zip Code..."
          />
        </View>
      </View>
    </NativeBaseProvider>
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
  SearchBar: {
    width: "90%",
    backgroundColor: "white",
  },
});
