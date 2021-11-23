import React from "react";
import { View, Text } from "react-native";

export default function savedSearchesCard(props) {
  const { item } = props;
  return (
    <View>
      <Text>{item.user_email}</Text>
    </View>
  );
}
