import * as React from "react";
import { WebView } from "react-native-webview";

export default function MapSearch() {
  return (
    <WebView style={styles.container} source={{ uri: "https://expo.dev" }} />
  );
}
