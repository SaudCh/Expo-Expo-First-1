import { Button, NativeBaseProvider } from "native-base";
import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, FlatList } from "react-native";
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
    searchResult();
  }, [limit]);

  return (
    <NativeBaseProvider>
      <Header backButton={true} navigation={props.navigation} />
      <Text>Advance Search</Text>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={listings}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => <SearchResultCard item={item} />}
        />
      )}
      <Button onPress={() => setlimit((e) => e + 10)}>Show More</Button>
    </NativeBaseProvider>
  );
}
