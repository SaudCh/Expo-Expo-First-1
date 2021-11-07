import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const Imge = (props) => {
  <View style={{ ...styles.cardView }}>
    <Image
      source={{ uri: `https://first1.us/${props.url}` }}
      style={{ ...styles.ImgStyle }}
    />
  </View>;
};

export default function SliderImg(props) {
  const { url } = props;
  //console.log(url);
  return <Imge url={url} />;
}
const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: width - 20,
    height: height / 3,
    backgroundColor: "white",
    marginVertical: 10,
    marginLeft: 0,
    borderRadius: 10,
  },
  ImgStyle: {
    width: width - 20,
    height: height / 3,
    borderRadius: 10,
  },
});
