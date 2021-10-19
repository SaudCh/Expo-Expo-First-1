import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Main from "./assets/Main/Main";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FeatureCities from "./assets/Main/FeatureCities";
import FeatureListings from "./assets/Main/FeatureListings";
import Favourite from "./assets/Main/Favourite";
import AdvanceSearch from "./assets/Main/AdvanceSearch";
import { FontAwesome5, FontAwesome, AntDesign } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabHomeButton = ({ children, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      justifyContent: "center",
      alignItems: "center",
      top: -30,
    }}
  >
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "#e32f45",
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);

function MainBottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#ffff",
          borderRadius: 15,
          height: 90,
          shadow: {
            shadowColor: "#7F5DF0",
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowRadius: 3.5,
            shadowOpacity: 0.25,
            elevation: 5,
          },
        },
      }}
    >
      <Tab.Screen
        name="FeatureCitites"
        component={FeatureCities}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => [
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <AntDesign
                name="staro"
                size={24}
                color="black"
                style={{ color: focused ? "#e32f45" : "#748c94" }}
              />
              <View>
                <Text
                  style={{
                    color: focused ? "#e32f45" : "#748c94",
                    fontSize: 12,
                  }}
                >
                  Feature
                </Text>
                <Text
                  style={{
                    color: focused ? "#e32f45" : "#748c94",
                    fontSize: 12,
                  }}
                >
                  Cities
                </Text>
              </View>
            </View>,
          ],
        }}
      />
      <Tab.Screen
        name="FeatureListings"
        component={FeatureListings}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => [
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <FontAwesome5
                name="city"
                size={25}
                color="black"
                style={{ color: focused ? "#e32f45" : "#748c94" }}
              />
              <View>
                <Text
                  style={{
                    color: focused ? "#e32f45" : "#748c94",
                    fontSize: 12,
                  }}
                >
                  Feature
                </Text>
                <Text
                  style={{
                    color: focused ? "#e32f45" : "#748c94",
                    fontSize: 12,
                  }}
                >
                  Listings
                </Text>
              </View>
            </View>,
          ],
        }}
      />
      <Tab.Screen
        name="Home"
        component={Main}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => [
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <FontAwesome
                name="home"
                size={35}
                color="black"
                style={{ color: "white" }}
              />
            </View>,
          ],
          tabBarButton: (props) => <BottomTabHomeButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Advance Search"
        component={AdvanceSearch}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => [
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <AntDesign
                name="search1"
                size={24}
                color="black"
                style={{ color: focused ? "#e32f45" : "#748c94" }}
              />
              <View>
                <Text
                  style={{
                    color: focused ? "#e32f45" : "#748c94",
                    fontSize: 12,
                  }}
                >
                  Advance
                </Text>
                <Text
                  style={{
                    color: focused ? "#e32f45" : "#748c94",
                    fontSize: 12,
                  }}
                >
                  {" "}
                  Search
                </Text>
              </View>
            </View>,
          ],
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => [
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <AntDesign
                name="hearto"
                size={25}
                color="black"
                style={{ color: focused ? "#e32f45" : "#748c94" }}
              />
              <View>
                <Text
                  style={{
                    color: focused ? "#e32f45" : "#748c94",
                    fontSize: 12,
                  }}
                >
                  Favourites
                </Text>
              </View>
            </View>,
          ],
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
          name="Main"
          component={MainBottomTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  bottomIcon: {},
});
