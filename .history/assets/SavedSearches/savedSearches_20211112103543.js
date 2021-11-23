import { NativeBaseProvider } from "native-base";
import React, { useEffect, useState } from "react";
import Header from "../Shared/header";
import { View, Text } from "react-native";

export default function savedSearches(props) {
  const [isLoading, setLoading] = useState(true);
  const [savedSearches, setSaveSearches] = useState();
  const fetchSavedSearches = async () => {
    try {
      const response = await fetch("https://first1.us/api/saved.php?data=12");
      const json = await response.json();
      //console.log(json.data[0].other_fields_json.ActiveOpenHouseCount);
      setSaveSearches.log(json.data);
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
        {isLoading ? (
          <View style={{ ...styles.activityContainer }}>
            <ActivityIndicator size="large" color="red" />
          </View>
        ) : (
          <FlatList
            data={savedSearches}
            keyExtractor={({ search_id }, index) => search_id}
            renderItem={({ item }) => <Text>{item.user_email}</Text>}
          />
        )}
      </View>
    </NativeBaseProvider>
  );
}
