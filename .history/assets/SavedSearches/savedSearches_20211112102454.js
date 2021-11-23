import { NativeBaseProvider } from "native-base";
import React from "react";
import Header from "../Shared/header";
import { View, Text } from "react-native";

export default function savedSearches(props) {
  const fetchSavedSearches = async () => {
    try {
      const response = await fetch("https://first1.us/api/saved.php?data=12");
      const json = await response.json();
      //console.log(json.data[0].other_fields_json.ActiveOpenHouseCount);
      console.log(json.data);
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
      <Text></Text>
    </NativeBaseProvider>
  );
}
