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
import { StatusBar } from "expo-status-bar";
import { AntDesign } from "@expo/vector-icons";
import Header from "../Shared/header";
import FeatureCities from "./FeatureCities";

export default function Main() {
  return (
    <NativeBaseProvider>
      {/******************Header******************/}
      <Header />
      <ScrollView>
        {/******************Search******************/}
        <View>
          <Input
            mx="3"
            placeholder="Input"
            w={{
              base: "75%",
              md: "25%",
            }}
          />
        </View>
        {/******************Feature City Section******************/}
        <FeatureCities />
        <StatusBar style="auto" />
      </ScrollView>
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
