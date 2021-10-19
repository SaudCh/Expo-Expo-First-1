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
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Feature"
          component={Feature}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
