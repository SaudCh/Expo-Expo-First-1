import { NativeBaseProvider } from "native-base";
import React from "react";
import Header from "../Shared/header";
import { View, Text } from "react-native";

export default function savedSearches() {
  return (
    <NativeBaseProvider>
      <Header backButton={true} navigation={props.navigation} />
      <Text></Text>
    </NativeBaseProvider>
  );
}
