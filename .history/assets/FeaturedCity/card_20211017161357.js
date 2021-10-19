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
    <View>
      <Text>
        {city.city_id}, {city.name}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({});
