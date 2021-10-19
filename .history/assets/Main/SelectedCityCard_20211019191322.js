import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, Text, Image, View } from "react-native";
import { Button } from "native-base";

export default function SelectedCityCard(props) {
  const { selectedCity } = props;
  const [amount, setAmount] = useState(500);
  const [read, setRead] = useState("more");
  var myArr = selectedCity.communities;
  myArr = myArr.split(",");
  myArr.forEach(myFunction);

  function myFunction(item, index) {
    item = item.split(":");
    myArr[index] = {
      index: item[0],
      value: item[1],
    };
    //console.log(myArr[index]);
  }
  //console.log(myArr[0]);

  useEffect(() => {
    return () => {
      setAmount(500);
      setRead("more");
      //console.log(selectedCity.communities);
      //console.log(myArr);
      //.split("+");
    };
  }, [selectedCity]);

  const content = (text1 = "") => {
    //text1 = "hello";
    text1 = text1.substring(0, amount);
    text1 = text1.replace("<p>", "");
    return text1;
  };
  const readMore = () => {
    //console.log("hello");
    if (amount == 500) {
      setAmount(10000);
      setRead("less");
    } else {
      setAmount(500);
      setRead("more");
    }
  };

  return (
    <View style={styles.cityContainer}>
      <Image
        style={styles.cityImage}
        source={{
          uri: `https://first1.us/admin/templates/cities/${selectedCity.header_img}`,
        }}
      />

      <Text>
        {content(selectedCity.content)}
        <Text
          style={{
            fontWeight: "bold",
            borderBottomColor: "#4fcdc5",
            borderBottomWidth: 1,
            marginLeft: 10,
            marginTop: 2,
          }}
          onPress={() => readMore()}
        >
          <Text style={{ color: "#4fcdc5" }}> Read {read}</Text>
        </Text>
      </Text>
      <Text style={styles.cityName}>{selectedCity.name} Communities</Text>
      <FlatList
        numColumns="3"
        data={myArr}
        keyExtractor={({ index }, index) => index}
        renderItem={({ item }) => (
          <Button onPress={() => changeCityHandler(item)}>{item.value}</Button>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  cityContainer: {
    borderWidth: 1,
    padding: 10,
    paddingLeft: 20,
    borderColor: "white",
    borderRadius: 20,
    margin: 10,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  cityImage: {
    width: "100%",
    height: 200,
    resizeMode: "center",
  },
  cityName: {
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 10,
    fontSize: 20,
    borderBottomColor: "#09AFFF",
    borderBottomWidth: 5,
    marginHorizontal: 50,
  },
});
