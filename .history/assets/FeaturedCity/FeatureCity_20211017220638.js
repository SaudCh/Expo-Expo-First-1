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
  const [amount, setAmount] = useState(500);
  const [read, setRead] = useState("more");

  const content = (text1) => {
    return text1.substring(3, amount);
  };

  const getMovies = async () => {
    try {
      var cond = `where city_id = ${city}`;
      const response = await fetch(
        `https://first1.us/api/cities.php?cond=${cond}`
      );
      var json = {
        data: [],
      };
      json = await response.json();
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
          <Text>
            {content(selectedCity.content, 500)}
            <Text
              style={{
                fontWeight: "bold",
                color: "#4fcdc5",
                borderBottomColor: "#4fcdc5",
                borderWidth: 1,
              }}
            >
              {" "}
              Read {read}
            </Text>
          </Text>
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
    padding: 10,
    paddingLeft: 20,
    borderColor: "white",
    borderRadius: 20,
    margin: 10,
    marginBottom: 100,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
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
    borderBottomWidth: 5,
    marginHorizontal: 50,
  },
});
