import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  FlatList,
  View,
} from "react-native";
import Header from "./assets/Shared/header";
import { AntDesign } from "@expo/vector-icons";

export default function App() {
  const [errorMsg, setErrorMsg] = useState(null);
  const [featureCity, setfeatureCity] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    load();
  }, []);
  async function load() {
    try {
      const weatherURL = `https://first1.us/api/cities.php`;

      const response = await fetch(weatherURL);
      const result = await response.json();
      //console.log(result);
      if (response.ok) {
        setfeatureCity(result);
        console.log(featureCity[0].city_id);
        //console.log(currentWeather)
      } else {
        setErrorMsg(result.message);
      }
    } catch (error) {
      setErrorMsg(error.message);
    } finally {
      setLoading(false);
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
      <FlatList
        data={featureCity}
        keyExtractor={({ id }, index) => item.city_id}
        renderItem={({ item }) => (
          <Text>
            {item.city_id}, {item.name}
          </Text>
        )}
      />
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
