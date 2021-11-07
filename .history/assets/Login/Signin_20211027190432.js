import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import Header from "../Shared/header";
import { AntDesign, Feather, EvilIcons } from "@expo/vector-icons";

export default function Signin(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <View>
      <Header backButton={true} navigation={props.navigation} />
      <Image
        source={require("../img/florida-2.jpg")}
        style={{ ...styles.SigninIamge }}
      />
      <View style={{ ...styles.MainContainer }}>
        <View style={{ ...styles.container }}>
          <EvilIcons name="envelope" size={24} color="black" />
          <TextInput
            value={email}
            style={styles.input}
            onChangeText={setEmail}
            placeholder="Email"
          />
        </View>
        <View style={{ ...styles.container }}>
          <EvilIcons name="unlock" size={24} color="black" />
          <TextInput
            value={email}
            style={styles.input}
            onChangeText={setEmail}
            placeholder="Password"
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  SigninIamge: { width: "100%", height: 300 },
  container: {
    marginBottom: 20,
    flexDirection: "row",
    borderWidth: 1,
    alignItems: "center",
    height: 40,
    borderRadius: 5,
  },
  MainContainer: {
    padding: 20,
  },
  input: {
    width: "100%",
    marginLeft: 10,
  },
});
