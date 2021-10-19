import React, { useEffect, useState } from "react";
import { StyleSheet, ActivityIndicator, Text, Image, View } from "react-native";

export default function Card(props) {
  const { city } = props;
  return (
    <View style={styles.cityContainer}>
      <Image
        style={styles.cityImage}
        source={{
          uri: `https://first1.us/admin/templates/cities/${selectedCity.header_img}`,
        }}
      />

      <Text>
        {content(selectedCity.content)}
        <Text
          style={{
            fontWeight: "bold",
            borderBottomColor: "#4fcdc5",
            borderBottomWidth: 1,
            marginLeft: 10,
            marginTop: 2,
          }}
          onPress={() => readMore()}
        >
          <Text style={{ color: "#4fcdc5" }}> Read {read}</Text>
        </Text>
      </Text>
      <Text style={styles.cityName}>{selectedCity.name}</Text>
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
