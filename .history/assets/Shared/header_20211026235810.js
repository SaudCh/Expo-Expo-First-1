import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function header() {
  return (
    <View class="" style={styles.container}>
      <Ionicons name="arrow-back-sharp" size={24} color="black" />
      <Image
        style={styles.logo}
        source={require("../img/logo/logo-bg-null.png")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: "white",
    flexDirection: "row",
  },
  logo: {
    marginLeft: 10,
    width: 150,
    height: 70,
    resizeMode: "center",
  },
});
