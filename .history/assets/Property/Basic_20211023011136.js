import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Header from "../Shared/header";
import {
  Entypo,
  Ionicons,
  FontAwesome,
  AntDesign,
  FontAwesome5,
  EvilIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Button } from "native-base";

export default function Basic() {
  return (
    <View style={{ ...styles.card2 }}>
      <View style={{ marginVertical: 10 }}>
        <Button style={{ backgroundColor: "#00A600", width: "45%" }}>
          {item.Status}
        </Button>
      </View>

      <View style={{ marginBottom: 10 }}>
        {item.PotentialShortSaleYN === "0" ? (
          <View></View>
        ) : (
          <Button style={{ width: "45%" }}>{item.PotentialShortSaleYN}</Button>
        )}
        {item.ForeclosedREOYN === "0" ? (
          <View></View>
        ) : (
          <Button style={{ width: "45%" }}>{item.ForeclosedREOYN}</Button>
        )}
      </View>

      <Text style={{ ...styles.Heading, marginBottom: 10 }}>
        {item.SubCondoName}
      </Text>
      <Text style={{ ...styles.Heading2, marginBottom: 10 }}>
        <EvilIcons
          name="location"
          size={24}
          color="#72809D"
          style={{ marginRight: 10 }}
        />
        {item.PropertyAddress}
      </Text>
      <Text style={{ ...styles.Heading2, marginBottom: 10 }}>
        <Ionicons
          name="menu"
          size={25}
          color="#72809D"
          style={{ marginRight: 10 }}
        />
        MLS #:{item.MLSNumber}
      </Text>
      <Text style={{ ...styles.Heading, marginBottom: 10 }}>
        ${priceConversion(item.CurrentPrice)}
      </Text>
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
  );
}
