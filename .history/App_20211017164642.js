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

import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Feature} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
