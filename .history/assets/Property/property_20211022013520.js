import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Header from "../Shared/header";
import { EvilIcons, Ionicons } from "@expo/vector-icons";

export default function Property(props) {
  const { route } = props;
  const { item } = route.params;

  const priceConversion = (price) => {
    price = price.substring(0, price.length - 3);
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <View>
      <Header />
      <View>
        <Image
          source={{ uri: `https://first1.us/${item.DefaultPic}` }}
          style={{ width: "100%", height: 200 }}
        />
        <View>
          <Text style={{ ...styles.Heading }}>{item.SubCondoName}</Text>
          <Text>
            <EvilIcons name="location" size={24} color="black" />
            {item.PropertyAddress}
          </Text>
          <Text>
            <Ionicons name="menu" size={24} color="black" />
            MLS #:{item.MLSNumber}
          </Text>
          <Text>{priceConversion(item.CurrentPrice)}</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  Heading: {
    fontSize: 20,
    color: "#2D3954",
    fontWeight: "700",
  },
});
