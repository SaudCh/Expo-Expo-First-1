import React from "react";
import { View, Image } from "react-native";

export default function Slider(props) {
  const { item } = props;
  return (
    <View>
      <Image
        source={{ uri: `https://first1.us/${item.DefaultPic}` }}
        style={{ width: "100%", height: 200 }}
      />
    </View>
  );
}
