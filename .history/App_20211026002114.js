import { StatusBar } from "expo-status-bar";
import { LogBox } from "react-native";
import React from "react";

import Navigator from "./assets/Navigator/Navigator";

export default function App() {
  LogBox.ignoreLogs(["VirtualizedLists "]); // Ignore log notification by message
  return <Navigator />;
}
