import React from "react";
import {
  View,
  Image,
  Text,
  FlatList,
  Dimensions,
  Animated,
} from "react-native";
import SliderImg from "./SliderImg";

const { width, height } = Dimensions.get("window");
let position = Animated.divide(scrollX, width);

export default function Slider(props) {
  const { item } = props;
  const Img = item.AllPixList.split(",");
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
          return <SliderImg url={item} />;
        }}
      />
      <View style={{ ...styles.dotView }}>
        {Img.map((_, i) => {
          let opacity = position.interpolate({
            inputRange: [i - 1, i, i + 1],
            outputRange,
          });
        })}
      </View>
      {/* <SliderImg url={Img[3]} /> */}
    </View>
  );
}
const styles = StyleSheet.create({});
