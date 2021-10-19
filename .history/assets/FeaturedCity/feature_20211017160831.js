import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  FlatList,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Feature() {
  const [errorMsg, setErrorMsg] = useState(null);
  const [featureCity, setfeatureCity] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const getMovies = async () => {
    try {
      const response = await fetch("https://first1.us/api/cities.php");
      const json = await response.json();
      console.log(json.data);
      setfeatureCity(json.data);
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
        keyExtractor={({ community_id }, index) => city_id}
        renderItem={({ item }) => (
          <Text>
            {item.community_id}, {item.name}
          </Text>
        )}
      />
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
