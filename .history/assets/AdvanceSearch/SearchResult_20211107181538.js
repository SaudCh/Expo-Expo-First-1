import { Button, NativeBaseProvider } from "native-base";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  StyleSheet,
} from "react-native";
import Header from "../Shared/header";
import SearchResultCard from "./SearchResultCard";

export default function SearchResult(props) {
  const { route } = props;
  const { item, query } = route.params;
  const [isLoading, setLoading] = useState(true);
  const [limit, setlimit] = useState(10);
  const [listings, setListing] = useState("");

  const searchResult = async () => {
    try {
      const response = await fetch(`${query}&limit=${limit}`);
      const json = await response.json();
      console.log(json);
      //console.log(json.data[0].other_fields_json.ActiveOpenHouseCount);
      setListing(json.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setlimit(10);
  }, [query]);

  useEffect(() => {
    searchResult();
  }, [limit, query]);

  return (
    <NativeBaseProvider>
      <Header backButton={true} navigation={props.navigation} />
      <Text style={styles.Heading}>Search Result</Text>
      <View style={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
        <Button style={{ width: 150 }}>Save Search</Button>
      </View>
      {isLoading ? (
        <View style={{ ...styles.activityContainer }}>
          <ActivityIndicator size="large" color="red" />
        </View>
      ) : (
        <FlatList
          data={listings}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <SearchResultCard item={item} navigation={props.navigation} />
          )}
        />
      )}
      <Button onPress={() => setlimit((e) => e + 10)}>Show More</Button>
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
