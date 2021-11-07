import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default function SliderImg(props) {
  const { url } = props;
  //console.log(url);
  return (
    <View style={{ ...styles.cardView }}>
      <Text>{url}</Text>
      <Image
        source={{ uri: `https://first1.us/${url}` }}
        style={{ width: "50%", height: 200 }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: width - 20,
    height: height / 3,
    backgroundColor: "white",
  },
});
