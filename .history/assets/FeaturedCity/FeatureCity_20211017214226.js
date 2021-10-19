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
    name: "",
  };
  const [isLoading, setLoading] = useState(false);
  const [selectedCity, setCity] = useState(dummy);

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
      <View>
        <View style={styles.cityContainer}>
          <Image
            style={styles.cityImage}
            source={{
              uri: `https://first1.us/admin/templates/cities/${selectedCity.header_img}`,
            }}
          />
          <Text>{selectedCity.content}</Text>
          <Text style={styles.cityName}>{selectedCity.name}</Text>
        </View>
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
    marginBottom: 100,
  },
  cityImage: {
    width: "100%",
    height: 200,
    resizeMode: "center",
  },
  cityName: {
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 10,
    fontSize: 20,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
});
