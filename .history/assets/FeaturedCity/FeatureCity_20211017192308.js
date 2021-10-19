import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  Image,
  View,
  Button,
} from "react-native";

export default function FeatureCity(props) {
  const { city } = props;
  const dummy = {
    header_img: "",
  };
  const [isLoading, setLoading] = useState(dummy);
  const [selectedCity, setCity] = useState(city);

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
      setLoading(true);
    }
  };

  useEffect(() => {
    getMovies();
  }, [city]);

  if (isLoading) {
    return (
      <View style={styles.cityContainer}>
        <Image
          style={styles.cityImage}
          source={{
            uri: `https://first1.us/admin/templates/cities/${selectedCity.header_img}`,
          }}
        />
        <Text>{selectedCity.name}</Text>
      </View>
    );
  } else {
    return (
      <View style={{ ...styles.activityContainer }}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  cityContainer: {
    borderWidth: 1,
    borderColor: "black",
    margin: 10,
  },
  cityImage: {
    width: "100%",
    height: 200,
    resizeMode: "center",
  },
});
