import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export default function SliderImg(props) {
  const { url } = props;
  //console.log(url);
  return (
    <View style={{ ...styles.cardView }}>
      <Text>{url}</Text>
      <Image
        source={{ uri: `https://first1.us/${url}` }}
        style={{ width: "100%", height: 200 }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  cardView: {},
});
