import React from "react";
import { View, Text } from "react-native";

export default function FeatureCard(props) {
  const { item } = props;
  return (
    <View>
      <Text>{item.PropertyAddress}</Text>
    </View>
  );
}
