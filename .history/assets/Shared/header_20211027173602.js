import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

export default function header(props) {
  return (
    <View class="" style={styles.container}>
      {props.backButton ? (
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
      {true ? (
        <Feather
          name="menu"
          size={24}
          color="black"
          style={{ marginRight: 10 }}
          onPress={() => props.navigation.openDrawer()}
        />
      ) : (
        <View></View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    marginLeft: 10,
    width: 150,
    height: 70,
    resizeMode: "center",
  },
});
