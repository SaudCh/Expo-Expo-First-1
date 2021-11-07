import * as React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Header from "../Shared/header";
import MapComponent from "./MapComponent";
import Footer from "../Shared/Footer";
import { NativeBaseProvider } from "native-base";

export default function MapSearch() {
  return (
    <NativeBaseProvider>
      <ScrollView>
        <Header />
        <View style={styles.container}>
          <MapComponent />
          <Footer />
        </View>
      </ScrollView>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
