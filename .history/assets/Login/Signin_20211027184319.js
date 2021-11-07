import React from "react";
import { View, Text } from "react-native";
import Header from "../Shared/header";

export default function Signin() {
  return (
    <View>
      <Header backButton={true} navigation={props.navigation} />
    </View>
  );
}
