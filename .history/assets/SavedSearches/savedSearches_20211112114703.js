import { NativeBaseProvider } from "native-base";
import React, { useEffect, useState } from "react";
import Header from "../Shared/header";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  ScrollView,
} from "react-native";
import SavedSearchesCard from "./savedSearchesCard";

export default function savedSearches(props) {
  const [isLoading, setLoading] = useState(true);
  const [savedSearches, setSaveSearches] = useState();
  const fetchSavedSearches = async () => {
    try {
      const response = await fetch("https://first1.us/api/saved.php?data=12");
      const json = await response.json();
      //console.log(json.data[0].other_fields_json.ActiveOpenHouseCount);
      setSaveSearches(json.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSavedSearches();
  }, []);

  return (
    <NativeBaseProvider>
      <Header backButton={true} navigation={props.navigation} />
      <View>
        <Text style={{ ...styles.Heading }}>Saved Searches</Text>
      </View>
      <ScrollView>
        {isLoading ? (
          <View style={{ ...styles.activityContainer }}>
            <ActivityIndicator size="large" color="red" />
          </View>
        ) : (
          <FlatList
            data={savedSearches}
            keyExtractor={({ search_id }, index) => search_id}
            renderItem={({ item }) => <SavedSearchesCard item={item} />}
          />
        )}
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
  Heading: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: "#2D3954",
  },
  FCbutton: {
    margin: 5,
  },
  activityContainer: {
    height: 400,
    alignContent: "center",
    justifyContent: "center",
  },
});
