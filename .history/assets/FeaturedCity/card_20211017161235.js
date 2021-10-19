import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  FlatList,
  View,
} from "react-native";

export default function Card(props) {
  const { item } = props;
  return (
    <View>
      <Text>
        {item.city_id}, {item.name}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({});
