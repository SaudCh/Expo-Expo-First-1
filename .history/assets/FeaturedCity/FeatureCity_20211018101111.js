import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  Image,
  View,
  Button,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

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

  const content = (text1 = "") => {
    //text1 = "hello";
    text1 = text1.substring(0, amount);
    text1 = text1.replace("<p>", "");
    return text1;
  };
  const readMore = () => {
    //console.log("hello");
    if (amount == 500) {
      setAmount(10000);
      setRead("less");
    } else {
      setAmount(500);
      setRead("more");
    }
  };

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
    setAmount(500);
    setRead("more");
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
            {content(selectedCity.content)}
            <TouchableOpacity
              style={{
                fontWeight: "bold",
                borderBottomColor: "#4fcdc5",
                borderBottomWidth: 1,
                marginRight: 5,
              }}
              onPress={() => readMore()}
            >
              <Text style={{ color: "#4fcdc5" }}> Read {read}</Text>
            </TouchableOpacity>
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
