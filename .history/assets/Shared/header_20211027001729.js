import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function header(props) {
  return (
    <View class="" style={styles.container}>
      {true ? (
        <Ionicons
          name="arrow-back-sharp"
          size={30}
          color="black"
          onPress={() => props.navigation.goBack()}
        />
      ) : (
        <View></View>
      )}
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
    alignItems: "center",
  },
  logo: {
    marginLeft: 10,
    width: 150,
    height: 70,
    resizeMode: "center",
  },
});
