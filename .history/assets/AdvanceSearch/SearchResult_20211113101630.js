import { Button, NativeBaseProvider } from "native-base";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  ToastAndroid,
} from "react-native";
import Header from "../Shared/header";
import SearchResultCard from "./SearchResultCard";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
      //console.log(item);
      //console.log(json.data[0].other_fields_json.ActiveOpenHouseCount);
      setListing(json.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const saveSearch = async () => {
    await AsyncStorage.getItem("@user_id").then((val) => {
      if (val) {
        //console.log(val);
        saveSearchApi(val);
      } else {
        //setUser("0");
      }
    });
  };

  const saveSearchApi = async (usr) => {
    // console.log(item);
    //console.log(usr);
    const qry = `https://first1.us/api/addSearch.php?user=${usr}&location=${item.location}&propertyType=${item.propertyType}&city=${item.city}&zipCode=${item.zipCode}&listed=${item.listed}&pending=${item.pending}&sold=${item.sold}&closure=${item.closure}&sale=${item.sale}&min=${item.min}&max=${item.max}&beds=${item.beds}&baths=${item.baths}&year=${item.year}&garage=${item.garage}&spa=${item.spa}&ghouse=${item.ghouse}&community=${item.community}&waterfront=${item.waterfront}&gulf=${item.gulf}&minArea=${item.minArea}&maxArea=${item.maxArea}&mslNum=${item.mslNum}&pool=${item.pool}&qry=${query}`;
    console.log(qry);
    try {
      const response = await fetch(
        `https://first1.us/api/addSearch.php?user=${usr}&location=${item.location}&propertyType=${item.propertyType}&city=${item.city}&zipCode=${item.zipCode}&listed=${item.listed}&pending=${item.pending}&sold=${item.sold}&closure=${item.closure}&sale=${item.sale}&min=${item.min}&max=${item.max}&beds=${item.beds}&baths=${item.baths}&year=${item.year}&garage=${item.garage}&spa=${item.spa}&ghouse=${item.ghouse}&community=${item.community}&waterfront=${item.waterfront}&gulf=${item.gulf}&minArea=${item.minArea}&maxArea=${item.maxArea}&mslNum=${item.mslNum}&pool=${item.pool}&qry="${query}"`
      );
      const json = await response.json();
      //console.log(json);
      ToastAndroid.show(json.data, ToastAndroid.SHORT);
      //setFavListing()
    } catch (error) {
      console.error(error);
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
      <View
        style={{
          justifyContent: "flex-end",
          alignItems: "flex-end",
          paddingRight: 20,
          marginBottom: 10,
        }}
      >
        <Button style={{ width: 150 }} onPress={() => saveSearch()}>
          Save Search
        </Button>
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
