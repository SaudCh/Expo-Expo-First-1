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
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function savedSearches(props) {
  const [isLoading, setLoading] = useState(true);
  const [savedSearches, setSaveSearches] = useState();

  const fetchSavedSearches = async () => {
    await AsyncStorage.getItem("@user_id").then((val) => {
      if (val) {
        //setUser(val);
        savedSearchesApi(val);
      } else {
        //setUser("0");
      }
    });
  };
  const savedSearchesApi = async (user) => {
    try {
      const response = await fetch(
        `https://first1.us/api/saved.php?data=${user}`
      );
      const json = await response.json();
      //console.log(json.data[0].other_fields_json.ActiveOpenHouseCount);
      setSaveSearches(json.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const deleteSearch = async (id) => {
    await AsyncStorage.getItem("@user_id").then((val) => {
      if (val) {
        //setUser(val);
        deleteSearchApi(id, val);
      } else {
        //setUser("0");
      }
    });
  };
  const deleteSearchApi = async (id, user) => {
    //console.log(id, user);
    try {
      const response = await fetch(
        `https://first1.us/api/delSearch.php?search=${id}&user=${user}`
      );
      const json = await response.json();
      //console.log(json.data[0].other_fields_json.ActiveOpenHouseCount);
      //setSaveSearches(json.data);
      ToastAndroid.show(json.data, ToastAndroid.SHORT);
      console.log(json);
    } catch (error) {
      console.error(error);
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
            renderItem={({ item }) => (
              <SavedSearchesCard
                item={item}
                navigation={props.navigation}
                deleteSearch={deleteSearch}
              />
            )}
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
