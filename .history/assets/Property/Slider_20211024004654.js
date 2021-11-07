import React from "react";
import { View, Image } from "react-native";
import SliderImg from "./SliderImg";

export default function Slider(props) {
  const { item } = props;
  return (
    <View>
      <SliderImg url={item.DefaultPic} />
    </View>
  );
}
