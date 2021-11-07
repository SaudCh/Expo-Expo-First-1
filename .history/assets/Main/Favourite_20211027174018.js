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
import FavouriteCard from "./FavouriteCard";

export default function FeatureListings(props) {
  const { navigation } = props;
  const [favCity, setFavCity] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const getMovies = async () => {
    try {
      const response = await fetch(
        "https://first1.us/api/favourite.php?data=12"
      );
      const json = await response.json();
      //console.log(json.data[0].other_fields_json.ActiveOpenHouseCount);
      setFavCity(json.data);
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
      <Header navigation={props.navigation} />
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
            <Text style={styles.featureCityText}>Favourite Listings</Text>
          </View>
          <View
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {isLoading ? (
              <View style={{ ...styles.activityContainer }}>
                <ActivityIndicator size="large" color="red" />
              </View>
            ) : (
              <FlatList
                data={favCity}
                keyExtractor={({ MLSNumber }, index) => MLSNumber}
                renderItem={({ item }) => (
                  <FavouriteCard item={item} navigation={navigation} />
                )}
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
  activityContainer: {
    height: 400,
    alignContent: "center",
    justifyContent: "center",
  },
});
