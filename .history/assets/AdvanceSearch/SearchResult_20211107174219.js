import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import Header from "../Shared/header";

export default function SearchResult(props) {
  const { route } = props;
  const { item, query } = route.params;

  const searchResult = async () => {
    try {
      const response = await fetch({ query });
      const json = await response.json();
      //console.log(json.data[0].other_fields_json.ActiveOpenHouseCount);
      setfeatureCity(json.data);
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
    </View>
  );
}
