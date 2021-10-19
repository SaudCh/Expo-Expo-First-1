import React, { useEffect, useState } from "react";
import { StyleSheet, Text, ImageBackground, View } from "react-native";
import { Input } from "native-base";

export default function Search(props) {
  return (
    <View style={{ ...styles.SearchContainer }}>
      <ImageBackground
        source={require("../img/logo/south-florida-homes-for-sale-header.jpg")}
        resizeMode="cover"
        style={styles.SearchImgBack}
      >
        <Input
          isFullWidth="false"
          mx="1"
          style={styles.SearchBar}
          placeholder="Input"
          w={{
            base: "75%",
            md: "25%",
          }}
        />
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  SearchContainer: {
    flex: 1,
  },
  SearchImgBack: {
    width: "100%",
    height: 400,
    justifyContent: "center",
    alignContent: "center",
  },
  SearchBar: {
    width: "90%",
    borderColor: "black",
    backgroundColor: "white",
  },
});
