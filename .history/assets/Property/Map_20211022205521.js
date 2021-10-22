import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";

export default function Map(props) {
  const mapApi = "AIzaSyBQwpzlVeV9AI6FETYYUmLt730XEKRdfAY";
  return <MapView style={{ ...styles.map }}></MapView>;
}
const styles = StyleSheet.create({
  map: {
    height: 100,
  },
});
