import React from "react";
import { View, Text } from "react-native";

export default function SearchResult(props) {
  const { route } = props;
  const { item, query } = route.params;
  return (
    <View>
      <Text>Advance Search</Text>
      <Text>{query}</Text>
    </View>
  );
}
