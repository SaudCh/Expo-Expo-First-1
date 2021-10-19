import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  FlatList,
  View,
  Button,
} from "react-native";

export default function FeatureCity(props) {
  const { city } = props;
  const [isLoading, setLoading] = useState(true);
  const [selectedCity, setCity] = useState();

  const getMovies = async () => {
    try {
      var cond = `where city_id = ${city}`;
      const response = await fetch(
        `https://first1.us/api/cities.php?cond=${cond}`
      );
      const json = await response.json();
      //console.log(json.data[0].city_id);
      setCity(json.data[0]);
      //console.log(selectedCity.city_id);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, [city]);

  return (
    <View style={styles.cityContainer}>
      <Text>{selectedCity.name}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  cityContainer: {
    borderWidth: 1,
    borderColor: "black",
    margin: 10,
  },
});
