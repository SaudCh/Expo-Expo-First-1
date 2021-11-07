import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  FlatList,
  View,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Input, NativeBaseProvider, Button } from "native-base";
import Header from "../Shared/header";
import FeatureCities from "./FeatureCities";
import Search from "./Search";
import Info from "./Info";
import Footer from "../Shared/Footer";
import { getFav } from "../Data/favourite";

export default function Main(props) {
  getFav();
  //console.log(getFav());
  return (
    <NativeBaseProvider>
      {/******************Header******************/}
      <Header navigation={props.navigation} />
      <ScrollView>
        {/* <Button onPress={() => props.navigation.openDrawer()}> Hello</Button> */}
        {/******************Search******************/}
        <Search navigation={props.navigation} />
        <Info navigation={props.navigation} />
        <Footer navigation={props.navigation} />
      </ScrollView>
      <StatusBar style="auto" />
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  featureCityContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  featureCityText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  FCbutton: {
    margin: 5,
  },
});
