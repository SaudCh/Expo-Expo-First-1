import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { Button, Input } from "native-base";

export default function Mortage(props) {
  const { item } = props;
  const [price, setPrice] = useState(item.CurrentPrice);
  const [dPayment, setDPayment] = useState("20");
  const [term, setTerm] = useState("30");
  const [rate, setRate] = useState("2.5");
  const [mortage, setMortage] = useState(0);

  return (
    <View style={{ ...styles.card }}>
      <Text style={{ ...styles.Heading }}>Mortage Calculator</Text>
      <View>
        <View style={{ ...styles.container }}>
          <Feather
            style={{ marginLeft: 5 }}
            name="dollar-sign"
            size={20}
            color="black"
          />
          <TextInput
            value={price}
            style={{ ...styles.input, margin: 0 }}
            onChangeText={setPrice}
            placeholder="Price"
          />
        </View>
        <View style={{ ...styles.container }}>
          <Feather
            style={{ marginLeft: 5 }}
            name="percent"
            size={20}
            color="black"
            placeholder="Down Payment (%)"
          />
          <TextInput
            value={dPayment}
            style={styles.input}
            onChangeText={setDPayment}
          />
        </View>
        <View style={{ ...styles.container }}>
          <AntDesign
            style={{ marginLeft: 5 }}
            name="calendar"
            size={20}
            color="black"
          />
          <TextInput value={term} style={styles.input} onChangeText={setTerm} />
        </View>
        <View style={{ ...styles.container }}>
          <Feather
            style={{ marginLeft: 5 }}
            name="percent"
            size={20}
            color="black"
          />
          <TextInput value={rate} style={styles.input} onChangeText={setRate} />
        </View>
        <View style={{ ...styles.box }}>
          <Button style={{ width: 100, alignSelf: "flex-end" }}>
            Caculate
          </Button>
        </View>
        <View style={{ ...styles.box }}>
          <Text style={{ alignSelf: "center", color: "#E87400", fontSize: 18 }}>
            ${mortage} Monthly Payment
          </Text>
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
    flexDirection: "row",
    borderWidth: 1,
    alignItems: "center",
    height: 40,
    borderRadius: 5,
  },
  input: {
    width: "100%",
    marginLeft: 10,
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
