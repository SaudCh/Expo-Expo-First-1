import React from "react";
import { View, Text } from "react-native";

export default function FeatureCard(props) {
  const { item } = props;
  return (
    <View style={{ ...styles.container }}>
      <Text>{item.PropertyAddress}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
  },
});
