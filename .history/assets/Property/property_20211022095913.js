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

  const totalArea = (area) => {
    return area.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const bedAndGar = (val) => {
    return val.substring(0, val.length - 3);
  };

  return (
    <NativeBaseProvider>
      <Header />
      <View>
        <Image
          source={{ uri: `https://first1.us/${item.DefaultPic}` }}
          style={{ width: "100%", height: 200 }}
        />
        {/***** card 1*****/}
        <View>
          <Button style={{ backgroundColor: "#00A600", width: "45%" }}>
            {item.Status}
          </Button>

          <View>
            {item.PotentialShortSaleYN === "0" ? (
              <View></View>
            ) : (
              <Button style={{ width: "45%" }}>
                {item.PotentialShortSaleYN}
              </Button>
            )}
            {item.ForeclosedREOYN === "0" ? (
              <View></View>
            ) : (
              <Button style={{ width: "45%" }}>{item.ForeclosedREOYN}</Button>
            )}
          </View>

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
        {/***** card 2*****/}
        <View>
          <View>
            <View>
              <Text>{item.Bedrooms}</Text>
              <Text>Bedrooms</Text>
            </View>
          </View>

          <View>
            <View>
              <Text>{bedAndGar(item.BathsTotal)} Bathrooms</Text>
              <Text>Bedrooms</Text>
            </View>
          </View>

          <View>
            <View>
              <Text>{bedAndGar(item.GarageSpaces)} Garage</Text>
              <Text>Car Garage</Text>
            </View>
          </View>

          <View>
            <View>
              <Text>{totalArea(item.TotalArea)} Sq Ft</Text>
              <Text>Living Area</Text>
            </View>
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text>{item.PropertyType}</Text>
              <Text>Property Type</Text>
            </View>
            <View>
              <Text>{item.YearBuilt}</Text>
              <Text>Year Build</Text>
            </View>
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text style={{ ...styles.text, fontWeight: "bold" }}>
                {item.Status}
              </Text>
              <Text>Status</Text>
            </View>
            <View style={{ ...styles.text, fontWeight: "bold" }}>
              <Text>{item.BathsFull}</Text>
              <Text>Bath Full</Text>
            </View>
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
