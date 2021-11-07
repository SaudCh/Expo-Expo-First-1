import * as React from "react";
import { StyleSheet, View } from "react-native";
import MapComponent from "MapComponent";

export default function MapSearch() {
  return (
    <View style={styles.container}>
      <MapComponent />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
