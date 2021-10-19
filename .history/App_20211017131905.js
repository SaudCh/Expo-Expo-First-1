import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import Header from "./assets/Shared/header";
import { AntDesign } from "@expo/vector-icons";

export default function App() {
  const [featureCity, setfeatureCity] = useState(null);

  useEffect(() => {
    load();
  }, []);
  async function load() {
    try {
      const weatherURL = `https://first1.us/api/cities.php`;

      const response = await fetch(weatherURL);
      const result = await response.json();
      console.log(result);
      if (response.ok) {
        setfeatureCity(result);
        //console.log(result)
        //console.log(currentWeather)
      } else {
        setErrorMsg(result.message);
      }
    } catch (error) {
      setErrorMsg(error.message);
    }
  }
  return (
    <View>
      <Header />
      <View style={styles.featureCityContainer}>
        <AntDesign
          style={{ marginRight: 10 }}
          name="staro"
          size={24}
          color="black"
        />
        <Text style={styles.featureCityText}>Feature City</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  featureCityContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  featureCityText: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
