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
import { paddingBottom } from "styled-system";

export default function School(props) {
  const { item } = props;
  const obj = JSON.parse(item.other_fields_json);
  const ElementarySchool = obj.ElementarySchool;
  return (
    <View>
      {ElementarySchool != "" || MiddleSchool != "" || HighSchool != "" ? (
        <View style={{ ...styles.card }}>
          <Text style={{ ...styles.Heading }}>Schools</Text>
          <View style={{ ...styles.cardBody }}>
            <View style={{ ...styles.container }}>
              <Text>{ElementarySchool}</Text>
              <Text>Elementary School</Text>
            </View>
            <View style={{ ...styles.container }}>
              <Text>{MiddleSchool}</Text>
              <Text>Middle School</Text>
            </View>
            <View style={{ ...styles.container }}>
              <Text>{HighSchool}</Text>
              <Text>High School</Text>
            </View>
          </View>
        </View>
      ) : (
        <View></View>
      )}
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
  container: {
    marginBottom: 10,
  },
});
