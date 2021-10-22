import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Header from "../Shared/header";
import {
  Entypo,
  Ionicons,
  FontAwesome,
  AntDesign,
  FontAwesome5,
  EvilIcons,
} from "@expo/vector-icons";
import { Button, NativeBaseProvider } from "native-base";

export default function Property(props) {
  const { route } = props;
  const { item } = route.params;

  const priceConversion = (price) => {
    price = price.substring(0, price.length - 3);
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const dateTodays = (date) => {
    var da = new Date();

    var month = da.getUTCMonth() + 1; //months from 1-12
    var day = da.getUTCDate();
    var year = da.getUTCFullYear();

    var currentDate = month + "/" + day + "/" + year;
    var cDate = new Date(currentDate);

    var y = parseInt(date.substring(0, 4));
    var m = parseInt(date.substring(5, 7));
    var d = parseInt(date.substring(8, 10));

    var dates = [
      "31",
      "28",
      "31",
      "30",
      "31",
      "30",
      "31",
      "31",
      "30",
      "31",
      "30",
      "31",
    ];

    var newMonth;
    var newDate;
    if (y < year) {
      newMonth = parseInt(month) - 11;
      newDate = parseInt(dates[month]) - parseInt(d);
    }
    newMonth = month - m;
    console.log(newMonth);
    if (newMonth === "") {
      newMonth = 0;
    }
    //const str = newMonth;
    return newMonth;
  };

  return (
    <NativeBaseProvider>
      <Header />
      <View>
        <Image
          source={{ uri: `https://first1.us/${item.DefaultPic}` }}
          style={{ width: "100%", height: 200 }}
        />
        <View>
          <Button style={{ backgroundColor: "#00A600" }}>{item.Status}</Button>
          <Button>{dateTodays(item.MatrixModifiedDT)}</Button>
          <Button>{item.PotentialShortSaleYN}</Button>

          <Text style={{ ...styles.Heading }}>{item.SubCondoName}</Text>
          <Text>
            <EvilIcons name="location" size={24} color="black" />
            {item.PropertyAddress}
          </Text>
          <Text>
            <Ionicons name="menu" size={24} color="black" />
            MLS #:{item.MLSNumber}
          </Text>
          <Text>${priceConversion(item.CurrentPrice)}</Text>
          <View
            style={{
              flexDirection: "row",
              marginVertical: 5,
              paddingTop: 10,
              borderTopWidth: 1,
            }}
          >
            <TouchableOpacity style={{ ...styles.btnContainer }}>
              <AntDesign name="hearto" size={25} color="#0078B3" />
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.btnContainer }}>
              <FontAwesome5 name="envelope" size={25} color="#0078B3" />
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.btnContainer }}>
              <FontAwesome name="share" size={25} color="#0078B3" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  Heading: {
    fontSize: 20,
    color: "#2D3954",
    fontWeight: "700",
  },
  btnContainer: {
    padding: 5,
    backgroundColor: "#D5F1FF",
    marginHorizontal: 10,
  },
});
