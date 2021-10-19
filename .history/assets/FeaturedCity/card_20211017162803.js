import React, { useEffect, useState } from "react";
import { StyleSheet, ActivityIndicator, Text, Image, View } from "react-native";

export default function Card(props) {
  const { city } = props;
  return (
    <View style={styles.cityContainer}>
      <Text style={styles.cityName}>{city.name}</Text>
      <Image
        style={styles.cityImage}
        source={{
          uri: `https://first1.us/admin/templates/cities/${city.header_img}`,
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  cityContainer: {
    borderWidth: 1,
    borderColor: "black",
    margin: 5,
    padding: 10,
    borderRadius: 20,
  },
  cityName: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  cityImage: {
    width: "100%",
    height: 200,
    resizeMode: "center",
  },
});
