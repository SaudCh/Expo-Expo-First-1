import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, FlatList } from "react-native";
import Header from "../Shared/header";

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
  }, []);

  return (
    <View>
      <Header backButton={true} navigation={props.navigation} />
      <Text>Advance Search</Text>
      <Text>{query}</Text>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>
              {item.title}, {item.releaseYear}
            </Text>
          )}
        />
      )}
    </View>
  );
}
