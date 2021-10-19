import { StatusBar } from "expo-status-bar";
import React from "react";
import Main from "./assets/Main/Main";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FeatureCities from "./assets/Main/FeatureCities";
import FeatureListings from "./assets/Main/FeatureListings";
import Favourite from "./assets/Main/Favourite";
import AdvanceSearch from "./assets/Main/AdvanceSearch";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator({
  tabBarOptions: { showLabel: false },
});

function MainBottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="FeatureCitites"
        component={FeatureCities}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="FeatureListings"
        component={FeatureListings}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Home"
        component={Main}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Advance Search"
        component={AdvanceSearch}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
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
          name="Main"
          component={MainBottomTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
