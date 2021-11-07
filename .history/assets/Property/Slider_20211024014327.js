import React from "react";
import {
  View,
  Image,
  Text,
  FlatList,
  Dimensions,
  Animated,
  StyleSheet,
} from "react-native";
import { useState } from "react/cjs/react.development";
import SliderImg from "./SliderImg";

const { width, height } = Dimensions.get("window");

export default function Slider(props) {
  const { item } = props;
  const [allPic, setAllpic] = useState([]);
  const Img = item.AllPixList.split(",");

  Img.forEach(myFunction);

  function myFunction(item, index) {
    //item = item.split(":");
    Img[index] = {
      indx: index,
      value: item,
    };
    //console.log(myArr[index]);
  }

  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);
  return (
    <View>
      {/* <Text>{Img}</Text> */}
      <FlatList
        data={Img}
        keyExtractor={(item, indx) => "key" + indx}
        horizontal
        pagingEnabled
        scrollEnabled
        snapToAlignment="center"
        scrollEventThrottle={16}
        decelerationRate={"fast"}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return <SliderImg url={item.value} />;
        }}
      />
      <View style={{ ...styles.dotView }}>
        {Img.map((_, i) => {
          let opacity = position.interpolate({
            inputRange: [i - 1, i, i + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp",
          });
          return (
            <Animated.View
              key={i}
              style={{
                opacity,
                height: 10,
                width: 10,
                background: "#595959",
                margin: 8,
                borderRadius: 5,
              }}
            />
          );
        })}
      </View>
      {/* <SliderImg url={Img[3]} /> */}
    </View>
  );
}
const styles = StyleSheet.create({
  dotView: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
