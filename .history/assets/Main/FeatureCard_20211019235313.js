import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Entypo, Ionicons, FontAwesome } from "@expo/vector-icons";

export default function FeatureCard(props) {
  const { item } = props;
  return (
    <View style={{ ...styles.container }}>
      <Image
        source={{ uri: `https://first1.us/${item.DefaultPic}` }}
        style={{ width: "100%", height: 200 }}
      />
      <TouchableOpacity>
        <Text
          style={{
            fontSize: 17,
            lineHeight: 30,
            fontWeight: "bold",
            color: "#09AFFF",
          }}
        >
          {item.SubCondoName}
        </Text>
      </TouchableOpacity>
      <Text style={{ color: "#535353", fontSize: 14, lineHeight: 24 }}>
        <Entypo name="location-pin" size={24} color="black" />{" "}
        {item.PropertyAddress}
      </Text>
      <Text
        style={{
          color: "#0076AE",
          fontSize: 22,
          lineHeight: 30,
          marginBottom: 20,
        }}
      >
        ${item.CurrentPrice}
      </Text>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text>
          <Ionicons name="bed" size={24} color="black" />
          <FontAwesome name="bathtub" size={24} color="black" />{" "}
          {item.BedsTotal} Beds
        </Text>
        <Text style={{ marginLeft: 83 }}>{item.BathsTotal} Bath</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text>{item.GarageSpaces} Garage</Text>
        <Text style={{ marginLeft: 50 }}>{item.TotalArea} sqft</Text>
      </View>
      <Text>{JSON.parse(item.other_fields_json).ListOfficeName}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    padding: 10,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    backgroundColor: "white",
    elevation: 15,
  },
});
