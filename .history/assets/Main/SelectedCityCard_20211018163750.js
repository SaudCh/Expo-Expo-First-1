import React, { useEffect, useState } from "react";
import { StyleSheet, ActivityIndicator, Text, Image, View } from "react-native";

export default function SelectedCityCard(props) {
  const { selectedCity } = props;
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
    padding: 10,
    paddingLeft: 20,
    borderColor: "white",
    borderRadius: 20,
    margin: 10,
    marginBottom: 100,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  cityImage: {
    width: "100%",
    height: 200,
    resizeMode: "center",
  },
  cityName: {
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 10,
    fontSize: 20,
    borderBottomColor: "black",
    borderBottomWidth: 5,
    marginHorizontal: 50,
  },
});
