import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";

export default function header() {
  return (
    <View class="" style={styles.container}>
      <Image
        style={{ width: 200, height: 80, resizeMode: "center" }}
        source={require("../img/logo/logo.png")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 39,
  },
});
