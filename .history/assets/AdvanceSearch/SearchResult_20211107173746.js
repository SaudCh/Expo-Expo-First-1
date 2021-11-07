import React from "react";
import { View, Text } from "react-native";
import Header from "../Shared/header";

export default function SearchResult(props) {
  const { route } = props;
  const { item, query } = route.params;
  return (
    <View>
      <Header backButton={true} navigation={props.navigation} />
      <Text>Advance Search</Text>
      <Text>{query}</Text>
    </View>
  );
}
