import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Header from "../Shared/header";

export default function Signin(props) {
  return (
    <View>
      <Header backButton={true} navigation={props.navigation} />
      <Image
        source={require("../img/florida-2.jpg")}
        style={{ ...styles.SigninIamge }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  SigninIamge: { width: "100%", height: 300 },
});
