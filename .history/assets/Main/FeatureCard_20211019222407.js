import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function FeatureCard(props) {
  const { item } = props;
  return (
    <View style={{ ...styles.container }}>
      <Image source={{ uri: `https://first1.us/${item.DefaultPic}` }} />
      <Text>{item.PropertyAddress}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "black",
    marginVertical: 10,
    padding: 10,
  },
});
