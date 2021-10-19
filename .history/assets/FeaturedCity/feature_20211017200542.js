import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  FlatList,
  View,
  Button,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Card from "./card";
import Header from "../Shared/header";
import FeatureCity from "./FeatureCity";

export default function Feature() {
  const [errorMsg, setErrorMsg] = useState(null);
  const [city, setCity] = useState();
  const [featureCity, setfeatureCity] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const getMovies = async () => {
    try {
      const response = await fetch(
        "https://first1.us/api/cities.php?data=name"
      );
      const json = await response.json();
      //console.log(json.data);
      setfeatureCity(json.data);
      setCity(json.data[0].city_id);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  const changeCityHandler = (item) => {
    setCity(item.city_id);
    //console.log(city);
  };

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
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FlatList
          numColumns="3"
          data={featureCity}
          keyExtractor={({ city_id }, index) => city_id}
          renderItem={({ item }) => (
            <View style={{ marginHorizontal: 10, marginVertical: 5 }}>
              <Button
                onPress={() => changeCityHandler(item)}
                style={styles.FCbutton}
                title={item.name}
              />
            </View>
          )}
        />
      </View>
      <FeatureCity city={city} />
      <View style={{ height: 100, marginTop: 500 }}></View>
      <Text>a</Text>
      {/* <FlatList
        data={featureCity}
        keyExtractor={({ city_id }, index) => city_id}
        renderItem={({ item }) => <Card city={item} />}
      /> */}
    </View>
  );
}
const styles = StyleSheet.create({
  featureCityContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  featureCityText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  FCbutton: {
    margin: 20,
  },
});
