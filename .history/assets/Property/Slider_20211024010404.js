import React from "react";
import { View, Image, Text, FlatList } from "react-native";
import SliderImg from "./SliderImg";

export default function Slider(props) {
  const { item } = props;
  const Img = item.AllPixList.split(",");
  return (
    <View>
      {/* <Text>{Img}</Text> */}
      <FlatList
        data={imgObj}
        horizontal
        pagingEnabled
        scrollEnabled
        snapToAlignment="center"
        scrollEventThrottle={16}
        decelerationRate={"fast"}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return <SliderImg url={item.link} />;
        }}
      />
      {/* <SliderImg url={Img[3]} /> */}
    </View>
  );
}
