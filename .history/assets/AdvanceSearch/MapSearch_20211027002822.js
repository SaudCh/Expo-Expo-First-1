import * as React from "react";
import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";
import { Header } from "../Shared/header";

export default function MapSearch() {
  return (
    <View>
      <Header />
      <WebView style={styles.container} source={{ uri: "https://expo.dev" }} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
