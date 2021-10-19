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

  const getMovies = async () => {
    try {
      const response = await fetch("https://first1.us/api/all_communities.php");
      const json = await response.json();
      setfeatureCity(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

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
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => (
          <Text>
            {item.title}, {item.releaseYear}
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
