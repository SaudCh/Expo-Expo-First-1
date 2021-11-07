import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import {
  Entypo,
  Ionicons,
  FontAwesome,
  AntDesign,
  FontAwesome5,
  EvilIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export default function Taxes(props) {
  const { item } = props;
  const priceConversion = (price) => {
    price = price.substring(0, price.length - 3);
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <View style={{ ...styles.card }}>
      <Text style={{ ...styles.Heading }}>Taxes</Text>
      <View>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.upperText }}>
            $ {priceConversion(JSON.parse(item.other_fields_json).Taxes)}
          </Text>
          <Text style={{ ...styles.lowerText }}>Taxes</Text>
        </View>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.upperText }}>
            {JSON.parse(item.other_fields_json).TaxYear}
          </Text>
          <Text style={{ ...styles.lowerText }}>Tax Year</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginVertical: 20,
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  container: {
    marginBottom: 10,
  },
  Heading: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: "#2D3954",
    borderBottomColor: "#f5f6fa",
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 10,
  },
  upperText: {
    color: "#172e6f",
    fontSize: 20,
    fontWeight: "bold",
  },
  lowerText: {
    fontSize: 16,
    color: "#546cb1",
  },
  box: {
    marginBottom: 10,
  },
});
