import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

export default function Map(props) {
  const { item } = props;
  const mapApi = "AIzaSyBQwpzlVeV9AI6FETYYUmLt730XEKRdfAY";
  return (
    <MapView
      style={{ ...styles.map }}
      loadEnabled={true}
      region={{
        latitude: parseFloat(item.Latitude),
        longitude: parseFloat(item.Longitude),
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    >
      <Marker
        style={{ width: 10 }}
        coordinate={{
          latitude: parseFloat(item.Latitude),
          longitude: parseFloat(item.Longitude),
        }}
        image={{ uri: "https://www.freeiconspng.com/uploads/pin-png-25.png" }}
      />
    </MapView>
  );
}
const styles = StyleSheet.create({
  map: {
    height: 600,
  },
});
