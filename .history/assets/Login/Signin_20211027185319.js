import React from "react";
import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import Header from "../Shared/header";
import { AntDesign, Feather } from "@expo/vector-icons";

export default function Signin(props) {
  return (
    <View>
      <Header backButton={true} navigation={props.navigation} />
      <Image
        source={require("../img/florida-2.jpg")}
        style={{ ...styles.SigninIamge }}
      />
      <View style={{ ...styles.container }}>
        <Feather
          style={{ marginLeft: 5 }}
          name="percent"
          size={20}
          color="black"
        />
        <TextInput
          style={styles.input}
          //onChangeText={setDPayment}
          placeholder="Down Payment (%)"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  SigninIamge: { width: "100%", height: 300 },
});
