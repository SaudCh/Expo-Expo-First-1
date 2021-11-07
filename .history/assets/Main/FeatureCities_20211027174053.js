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
import { getCities } from "../Data/cities";

export default function FeatureCities(props) {
  const featureCity = getCities();
  const [city, setCity] = useState(featureCity[0].city_id);
  const [isLoading, setLoading] = useState(true);

  const changeCityHandler = (item) => {
    setCity(item.city_id);
  };

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
