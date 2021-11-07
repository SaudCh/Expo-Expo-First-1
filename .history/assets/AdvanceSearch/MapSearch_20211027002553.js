import * as React from "react";
import { StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default function MapSearch() {
  return (
    <WebView style={styles.container} source={{ uri: "https://expo.dev" }} />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
