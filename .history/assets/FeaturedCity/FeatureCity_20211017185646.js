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
  const getMovies = async () => {
    try {
      var cond = `where city_id = ${city}`;
      const response = await fetch(
        `https://first1.us/api/cities.php?cond=${cond}`
      );
      const json = await response.json();
      console.log(json);
      //console.log(json.data);
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
      <Text>{city}</Text>
    </View>
  );
}
