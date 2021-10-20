import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function FeatureCard(props) {
  const { item } = props;
  return (
    <View style={{ ...styles.container }}>
      <Image
        source={{ uri: `https://first1.us/${item.DefaultPic}` }}
        style={{ width: "100%", height: 200 }}
      />
      <TouchableOpacity>
        <Text style={{ fontSize: 17, lineHeight: 14 }}>
          {item.SubCondoName}
        </Text>
      </TouchableOpacity>
      <Text>{item.PropertyAddress}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    padding: 10,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    backgroundColor: "white",
    elevation: 15,
  },
});
