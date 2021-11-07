import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

export default function Map(props) {
  const { item } = props;
  return (
    <View style={{ ...styles.card }}>
      <Text style={{ ...styles.Heading }}>Property Location</Text>
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
          //style={{ width: 10, height: 10 }}
          coordinate={{
            latitude: parseFloat(item.Latitude),
            longitude: parseFloat(item.Longitude),
          }}
          //image={{ uri: "https://www.freeiconspng.com/uploads/pin-png-25.png" }}
          pinColor="red"
        />
      </MapView>
    </View>
  );
}
const styles = StyleSheet.create({
  map: {
    height: 500,
  },
  card: {
    padding: 10,
    marginVertical: 20,
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  Heading: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: "#2D3954",
    borderBottomColor: "#f5f6fa",
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 10,
  },
});
