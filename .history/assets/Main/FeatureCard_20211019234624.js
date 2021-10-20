import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { fontSize } from "styled-system";

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
        {item.PropertyAddress}
      </Text>
      <Text
        style={{
          color: "#0076AE",
          fontSize: 22,
          lineHeight: 30,
          marginBottom: 10,
        }}
      >
        ${item.CurrentPrice}
      </Text>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text>{item.BedsTotal} Beds</Text>
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
      <Text style={{ marginLeft: 50 }}>{item.other_fields_json.parse()}</Text>
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
