import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  FlatList,
  View,
} from "react-native";

export default function Card(props) {
  const { city } = props;
  return (
    <View style={styles.cityContainer}>
      <Text>
        {city.city_id}, {city.name}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  cityContainer: {
    borderWidth: 1,
    borderColor: "black",
    margin: 5,
    padding: 10,
    borderRadius: 20,
  },
});
