import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Header from "../Shared/header";

export default function Property(props) {
  const { route } = props;
  const { item } = route.params;

  return (
    <View>
      <Header />
      <View>
        <Image
          source={{ uri: `https://first1.us/${item.DefaultPic}` }}
          style={{ width: "100%", height: 200 }}
        />
        <View>
          <Text style={{ ...styles.Heading }}>{item.SubCondoName}</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  Heading: {
    fontSize: 20,
    color: "#2D3954",
  },
});
