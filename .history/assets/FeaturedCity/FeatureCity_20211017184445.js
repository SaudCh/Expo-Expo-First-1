import React from "react";
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  FlatList,
  View,
  Button,
} from "react-native";

export default function FeatureCity(props) {
  const [city] = props;
  return (
    <View>
      <Text>{city}</Text>
    </View>
  );
}
