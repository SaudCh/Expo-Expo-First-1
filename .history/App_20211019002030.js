import { StatusBar } from "expo-status-bar";
import React from "react";
import Main from "./assets/Main/Main";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FeatureCities from "./assets/Main/FeatureCities";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainBottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="FeatureCitites"
        component={FeatureCities}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Home"
        component={Main}
        options={{ headerShown: false }}
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
          component={MainBottomTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
