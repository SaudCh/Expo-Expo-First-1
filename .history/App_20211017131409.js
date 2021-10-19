import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import Header from "./assets/Shared/header";
import { AntDesign } from "@expo/vector-icons";

export default function App() {
  useEffect(() => {
    load();
  }, []);
  async function load() {
    try {
      const { latitude, longitude } = location.coords;
      //console.log('Latitude :' + latitude + " Longitude " + longitude)
      const weatherURL = `${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&units=${unitSystem}&exclude=minutely,current,hourly,alert&appid=${WEATHER_API_KET}`;

      const response = await fetch(weatherURL);
      const result = await response.json();

      if (response.ok) {
        setCurrentweather(result);
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
