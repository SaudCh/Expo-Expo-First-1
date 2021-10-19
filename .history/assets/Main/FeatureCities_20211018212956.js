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

export default function FeatureCities(props) {
  const { featureCity, selectedCity } = props;
  const [city, setCity] = useState(selectedCity);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    return () => {
      try {
        setCity(featureCity[0].city_id);
      } catch {
        console.log(error);
      }
    };
  }, [featureCity]);

  const changeCityHandler = (item) => {
    setCity(item.city_id);
  };

  return (
    <View>
      {/******************Feature City Section******************/}
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
          alignItems: "center",
        }}
      >
        <FlatList
          numColumns="3"
          data={featureCity}
          keyExtractor={({ city_id }, index) => city_id}
          renderItem={({ item }) => (
            <Button
              onPress={() => changeCityHandler(item)}
              style={styles.FCbutton}
            >
              {item.name}
            </Button>
          )}
        />
      </View>
      <SelectedFeatureCity city={city} />
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
    margin: 5,
  },
});
