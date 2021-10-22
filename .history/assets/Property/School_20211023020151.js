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
  console.log(obj);
  const ElementarySchool = obj.ElementarySchool;
  const MiddleSchool = item.MiddleSchool;
  const HighSchool = item.HighSchool;

  return (
    <View>
      {ElementarySchool != "" || MiddleSchool != "" || HighSchool != "" ? (
        <View style={{ ...styles.card }}>
          <Text style={{ ...styles.Heading }}>Schools</Text>
          <View style={{ ...styles.cardBody }}>
            <View style={{ ...styles.container }}>
              <Text style={{ ...styles.upperText }}>{ElementarySchool}</Text>
              <Text style={{ ...styles.lowerText }}>Elementary School</Text>
            </View>
            <View style={{ ...styles.container }}>
              <Text style={{ ...styles.upperText }}>{MiddleSchool}</Text>
              <Text style={{ ...styles.lowerText }}>Middle School</Text>
            </View>
            <View style={{ ...styles.container }}>
              <Text style={{ ...styles.upperText }}>{HighSchool}</Text>
              <Text style={{ ...styles.lowerText }}>High School</Text>
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
  upperText: {
    color: "#172e6f",
    fontSize: 20,
  },
  lowerText: {
    fontSize: 16,
    color: "#546cb1",
  },
});
