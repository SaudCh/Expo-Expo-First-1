import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  FlatList,
  View,
} from "react-native";
import Header from "./assets/Shared/header";
import Feature from "./assets/FeaturedCity/feature";

export default function App() {
  return (
    <View>
      <Header />
      <Feature />
      <StatusBar style="auto" />
    </View>
  );
}
