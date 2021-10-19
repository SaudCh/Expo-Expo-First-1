import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  FlatList,
  View,
  TouchableOpacity,
} from "react-native";
import Header from "./assets/Shared/header";
import Feature from "./assets/FeaturedCity/feature";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="First1.us"
        component={Feature}
        options={{
          title: "            Home Page",
          headerStyle: {
            backgroundColor: "white",
          },
          headerLeft: () => (
            <TouchableOpacity
              style={{ paddingLeft: 10 }}
              onPress={() => console.log("Settings Icon Pressed")}
            >
              <Icon
                containerStyle={{ paddingLeft: 10 }}
                type="ionicon"
                color="mediumseagreen"
                name={
                  Platform.OS === "ios"
                    ? "ios-settings-outline"
                    : "md-settings-outline"
                }
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{ paddingRight: 10 }}
              onPress={() => console.log("Menu Icon Pressed")}
            >
              <Icon
                containerStyle={{ paddingRight: 10 }}
                type="ionicon"
                color="mediumseagreen"
                name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
