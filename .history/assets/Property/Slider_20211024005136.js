import React from "react";
import { View, Image, Text } from "react-native";
import SliderImg from "./SliderImg";

export default function Slider(props) {
  const { item } = props;
  const Img = item.AllPixList.split(",");
  return (
    <View>
      {/* <Text>{Img}</Text> */}
      <SliderImg url={Img[3]} />
    </View>
  );
}
