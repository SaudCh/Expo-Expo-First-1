import React, { useEffect, useState } from "react";
import { StyleSheet, Text, ImageBackground, View } from "react-native";
import { Input } from "native-base";
import { style } from "styled-system";

const image = { uri: "https://reactjs.org/logo-og.png" };

export default function Search(props) {
  return (
    <View style={{ ...styles.SearchContainer }}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={{ width: "100%", height: 500 }}
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
    display: "flex",
  },
  SearchBar: {
    width: "90%",
    borderColor: "black",
  },
});
