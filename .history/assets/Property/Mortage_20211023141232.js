import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { Input } from "native-base";

export default function Mortage(props) {
  const { item } = props;
  const [price, setPrice] = useState(parseInt(item.CurrentPrice));
  const [dPayment, setDPayment] = useState("20");
  const [term, setTerm] = useState("30");
  const [rate, setRate] = useState("2.5");
  const [mortage, setMortage] = useState();

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
            style={styles.input}
            onChangeText={setPrice}
          />
        {/* </View>
        <View style={{ ...styles.container }}>
          <Input
            value={dPayment}
            onChange={setDPayment}
            mx="3"
            InputLeftElement={
              <Feather
                style={{ marginLeft: 5 }}
                name="percent"
                size={20}
                color="black"
              />
            }
            placeholder="Down Payment (%)"
            w={{
              base: "90%",
              md: "25%",
            }}
          />
        </View>
        <View style={{ ...styles.container }}>
          <Input
            value={term}
            onChange={setTerm}
            mx="3"
            InputLeftElement={
              <AntDesign
                style={{ marginLeft: 5 }}
                name="calendar"
                size={20}
                color="black"
              />
            }
            placeholder="Term (Year)"
            w={{
              base: "90%",
              md: "25%",
            }}
          />
        </View>
        <View style={{ ...styles.container }}>
          <Input
            value={rate}
            onChange={setRate}
            mx="3"
            InputLeftElement={
              <Feather
                style={{ marginLeft: 5 }}
                name="percent"
                size={20}
                color="black"
              />
            }
            placeholder="Rate (%)"
            w={{
              base: "90%",
              md: "25%",
            }}
          />
        </View> */}
        <Text>{mortage}</Text>
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
