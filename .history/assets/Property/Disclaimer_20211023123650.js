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
  const year = new Date().getFullYear();
  return (
    <View style={{ ...styles.card }}>
      <Text style={{ ...styles.Heading }}>Disclaimer</Text>
      <View>
        <Text style={{ ...styles.paraGraph }}>
          The source of this real property information is the copyrighted and
          proprietary database compilation of the M.L.S. of Naples, Inc.
          Copyright {year} M.L.S. of Naples, Inc. All rights reserved. The
          accuracy of this information is not warranted or guaranteed. This
          information should be independently verified if any person intends to
          engage in a transaction in reliance upon it.
        </Text>
        <Text style={{ ...styles.upperText }}>
          Listed By:{" "}
          <Text style={{ ...styles.lowerText }}>
            {JSON.parse(item.other_fields_json).ListAgentFullName}
          </Text>
        </Text>
        <Text style={{ ...styles.lowerText }}>
          {JSON.parse(item.other_fields_json).ListOfficeName}
        </Text>
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
  paraGraph: {
    fontSize: 17,
    lineHeight: 25,
  },
});
