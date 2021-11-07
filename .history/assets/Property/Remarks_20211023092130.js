import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Remarks(props) {
  const { item } = props;
  return (
    <View style={{ ...styles.card }}>
      <Text style={{ ...styles.Heading }}>Remarks</Text>
      <Text style={{ fontSize: 17, lineHeight: 25 }}>
        {item.PropertyInformation}
      </Text>
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
});
