import * as React from "react";
import { StyleSheet, View } from "react-native";
import Header from "../Shared/header";
import MapComponent from "./MapComponent";
import Footer from "../Shared/Footer";

export default function MapSearch() {
  return (
    <View style={styles.container}>
      <Header />
      <MapComponent />
      <Footer />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
