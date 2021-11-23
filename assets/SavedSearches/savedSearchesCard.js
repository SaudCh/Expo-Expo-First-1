import { Button } from "native-base";
import React, { useState } from "react";
import { View, Text, StyleSheet, ToastAndroid } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function savedSearchesCard(props) {
  const { item, deleteSearch, navigation } = props;
  const quickSearch = (item) => {
    console.log(item);
    const itm = {
      location: item.location,
      propertyType: item.property_type,
      city: item.city,
      zipCode: item.zipcode,
      listed: item.new_listings,
      pending: "",
      sold: "",
      closure: "",
      sale: "",
      min: item.min_price,
      max: item.max_price,
      beds: item.beds,
      baths: item.baths,
      year: item.min_year,
      garage: item.garage,
      spa: item.spa,
      ghouse: item.guest_house,
      community: item.gated,
      waterfront: item.waterfront,
      gulf: item.gulf_access,
      minArea: item.min_sq_ft,
      maxArea: item.max_sq_ft,
      mslNum: "",
      pool: item.pool,
    };
    //console.log(item);
    const query = `https://first1.us/api/search.php?location=${item.location}&mls_number=&min_price${item.min_price}=&max_price=${item.max_price}&property_type=${item.property_type}&city=${item.city}&zipcode=${item.zipcode}&beds=${item.beds}&baths=${item.baths}&min_sq_ft=${item.min_sq_ft}&max_sq_ft=${item.max_sq_ft}&min_year=${item.min_year}&garage=${item.garage}&just_listed=${item.new_listings}&include_pending=&include_sold=&foreclosure=&short_sale=&pool=${item.pool}&spa=${item.spa}&guest_house=${item.guest_house}&waterfront=${item.waterfront}&gated=${item.gated}&communities=&gulf_access=${item.gulf_access}&ref=advanced&sort=price-asc&pagination=get&page=1`;
    navigation.navigate("Search Result", {
      item: itm,
      query: query,
    });
    //console.log(query);
  };
  return (
    <View style={{ ...styles.card }}>
      <View style={{ ...styles.textContainer }}>
        <Text style={{ ...styles.upperText }}>Type:</Text>
        <Text style={{ ...styles.LowerText }}>{item.property_type}</Text>
      </View>

      <View style={{ ...styles.textContainer }}>
        <Text style={{ ...styles.upperText }}>Location:</Text>
        <Text style={{ ...styles.LowerText }}>{item.location}</Text>
      </View>

      <View style={{ ...styles.textContainer }}>
        <Text style={{ ...styles.upperText }}>City:</Text>
        <Text style={{ ...styles.LowerText }}>{item.city}</Text>
      </View>

      <View style={{ ...styles.textContainer }}>
        <Text style={{ ...styles.upperText }}>Zip:</Text>
        <Text style={{ ...styles.LowerText }}>{item.zipcode}</Text>
      </View>

      <View style={{ ...styles.textContainer }}>
        <Text style={{ ...styles.upperText }}>Bedrooms:</Text>
        <Text style={{ ...styles.LowerText }}>{item.beds}</Text>
      </View>

      <View style={{ ...styles.textContainer }}>
        <Text style={{ ...styles.upperText }}>Bathrooms:</Text>
        <Text style={{ ...styles.LowerText }}>{item.baths}</Text>
      </View>

      <View style={{ ...styles.textContainer }}>
        <Text style={{ ...styles.upperText }}>Min Price</Text>
        <Text style={{ ...styles.LowerText }}>{item.min_price}</Text>
      </View>

      <View style={{ ...styles.textContainer }}>
        <Text style={{ ...styles.upperText }}>Max Price</Text>
        <Text style={{ ...styles.LowerText }}>{item.max_price}</Text>
      </View>

      <View style={{ ...styles.textContainer }}>
        <Text style={{ ...styles.upperText }}>Min Area</Text>
        <Text style={{ ...styles.LowerText }}>{item.min_sq_ft}</Text>
      </View>

      <View style={{ ...styles.textContainer }}>
        <Text style={{ ...styles.upperText }}>Max Area</Text>
        <Text style={{ ...styles.LowerText }}>{item.max_sq_ft}</Text>
      </View>

      <View style={{ ...styles.textContainer }}>
        <Text style={{ ...styles.upperText }}>Car Garage</Text>
        <Text style={{ ...styles.LowerText }}>{item.garage}</Text>
      </View>

      <View style={{ ...styles.textContainer }}>
        <Text style={{ ...styles.upperText }}>Pool</Text>
        <Text style={{ ...styles.LowerText }}>{item.pool}</Text>
      </View>

      <View style={{ ...styles.textContainer }}>
        <Text style={{ ...styles.upperText }}>SPA</Text>
        <Text style={{ ...styles.LowerText }}>{item.spa}</Text>
      </View>

      <View style={{ ...styles.textContainer }}>
        <Text style={{ ...styles.upperText }}>Guest House</Text>
        <Text style={{ ...styles.LowerText }}>{item.guest_house}</Text>
      </View>

      <View style={{ ...styles.textContainer }}>
        <Text style={{ ...styles.upperText }}>Water Front</Text>
        <Text style={{ ...styles.LowerText }}>{item.waterfront}</Text>
      </View>

      <View style={{ ...styles.textContainer }}>
        <Text style={{ ...styles.upperText }}>Gated</Text>
        <Text style={{ ...styles.LowerText }}>{item.gated}</Text>
      </View>

      <View style={{ ...styles.textContainer }}>
        <Text style={{ ...styles.upperText }}>Gulf Access</Text>
        <Text style={{ ...styles.LowerText }}>{item.gulf_access}</Text>
      </View>

      <View style={{ ...styles.textContainer }}>
        <Text style={{ ...styles.upperText }}>Communities</Text>
        <Text style={{ ...styles.LowerText }}>{item.communities}</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 30,
        }}
      >
        <Button onPress={() => quickSearch(item)}>Search Result</Button>
        <Button
          colorScheme="danger"
          onPress={() => deleteSearch(item.search_id)}
        >
          Delete Search
        </Button>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginVertical: 20,
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  upperText: {
    color: "#172e6f",
    fontSize: 20,
    fontWeight: "bold",
  },
  LowerText: {
    fontSize: 18,
    marginTop: 1,
    marginLeft: 5,
    color: "#546cb1",
  },
  textContainer: {
    flexDirection: "row",
  },
});
