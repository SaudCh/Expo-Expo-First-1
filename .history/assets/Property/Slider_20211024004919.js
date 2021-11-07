import React from "react";
import { View, Image, Text } from "react-native";
import SliderImg from "./SliderImg";

export default function Slider(props) {
  const { item } = props;
  const Img = item.AllPixList;
  return (
    <View>
      <Text>{Img}</Text>
      <SliderImg url={item.DefaultPic} />
    </View>
  );
}
