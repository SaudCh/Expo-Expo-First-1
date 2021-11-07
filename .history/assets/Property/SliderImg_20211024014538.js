import React from "react";
import { View, Text, Image } from "react-native";

export default function SliderImg(props) {
  const { url } = props;
  //console.log(url);
  return (
    <View>
      <Text>{url}</Text>
      <Image
        source={{ uri: `https://first1.us/${url}` }}
        style={{ width: "100%", height: 200 }}
      />
    </View>
  );
}
