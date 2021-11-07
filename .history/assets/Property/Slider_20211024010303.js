import React from "react";
import { View, Image, Text, FlatList } from "react-native";
import SliderImg from "./SliderImg";

export default function Slider(props) {
  const { item } = props;
  const Img = item.AllPixList.split(",");
  Img.forEach(myFunction);
  var imgObj = [];
  function myFunction(item, index, imgObj) {
    imgObj[index] = {
      index: index,
      link: item,
    };
  }
  return (
    <View>
      {/* <Text>{Img}</Text> */}
      <FlatList
        data={Img}
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
