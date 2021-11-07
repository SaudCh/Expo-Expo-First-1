import React from "react";
import { View, Text } from "react-native";

export default function SearchResult(props) {
  const { item } = route.params;
  return (
    <View>
      <Text>Advance Search</Text>
      {item}
    </View>
  );
}
