import React, { useEffect } from "react";
import {
  View,
  Image,
  Text,
  FlatList,
  Dimensions,
  Animated,
  StyleSheet,
} from "react-native";
import SliderImg from "./SliderImg";

const { width, height } = Dimensions.get("window");

// let flatList;

// function infiniteScroll(dataList) {
//   flatList = "";
//   const numberOfData = dataList.length;
//   let scrollValue = 0,
//     scrolled = 0;

//   setInterval(function () {
//     scrolled++;
//     if (scrolled < numberOfData) scrollValue = scrollValue + width;
//     else {
//       scrollValue = 0;
//       scrolled = 0;
//     }

//     flatList.scrollToOffset({ animated: true, offset: scrollValue });
//   }, 3000);
// }

export default function Slider(props) {
  const { item } = props;
  //const [allPic, setAllpic] = useState([]);
  console.log(item.AllPixList);
  const Img = item.AllPixList.split(",");
  Img.forEach(myFunction);

  function myFunction(item, index) {
    //item = item.split(":");
    if (item != "") {
      Img[index] = {
        indx: index,
        value: item,
      };
    }
    //console.log(myArr[index]);
  }

  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);

  // useEffect(() => {
  //   //setDataList(data);
  //   infiniteScroll(Img);
  // });

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
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { x: scrollX } } },
        ])}
      />
      <View style={styles.dotView}>
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
                backgroundColor: "#595959",
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
    flexWrap: "wrap",
  },
});
