import { NativeBaseProvider } from "native-base";
import React from "react";
import { View, Text, ScrollView } from "react-native";
import Footer from "../Shared/Footer";
import Header from "../Shared/header";

export default function Contact(props) {
  return (
    <NativeBaseProvider>
      <ScrollView>
        <Header backButton={true} navigation={props.navigation} />
        <Text>Contact Us</Text>
        <Footer props={props} />
      </ScrollView>
    </NativeBaseProvider>
  );
}
