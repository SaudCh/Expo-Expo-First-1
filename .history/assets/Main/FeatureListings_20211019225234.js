import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  FlatList,
  View,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Input, NativeBaseProvider, Button } from "native-base";

import { AntDesign } from "@expo/vector-icons";

import SelectedFeatureCity from "./SelectedFeatureCity";
import Header from "../Shared/header";
import Footer from "../Shared/Footer";
import FeatureCard from "./FeatureCard";

export default function FeatureListings(props) {
  const [featureCity, setfeatureCity] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const getMovies = async () => {
    try {
      const response = await fetch("https://first1.us/api/properties.php");
      const json = await response.json();
      //console.log(json.data);
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
    <NativeBaseProvider>
      <Header />
      <ScrollView>
        <View>
          {/******************Feature City Section******************/}
          <View style={styles.featureCityContainer}>
            <AntDesign
              style={{ marginRight: 10 }}
              name="staro"
              size={24}
              color="black"
            />
            <Text style={styles.featureCityText}>Feature Listings</Text>
          </View>
          <View
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {isLoading ? (
              <View></View>
            ) : (
              <FlatList
                data={featureCity}
                keyExtractor={({ city_id }, index) => city_id}
                renderItem={({ item }) => <FeatureCard item={item} />}
              />
            )}
          </View>
          <Footer />
        </View>
      </ScrollView>
    </NativeBaseProvider>
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
  FCbutton: {
    margin: 5,
  },
});
