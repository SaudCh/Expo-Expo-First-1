import React, { useEffect, useState } from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import { Input } from "native-base";
import { style } from "styled-system";

export default function Search(props) {
  return (
    <View style={{ ...styles.SearchContainer }}>
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
