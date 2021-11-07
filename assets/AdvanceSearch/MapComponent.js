import * as React from "react";
import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";

export default function MapSearch() {
  return (
    <View style={styles.container}>
      <WebView
        source={{
          uri: "https://first1.us/map-search.php?location=Any&mls_number=&min_price=&max_price=&property_type=&city=&zipcode=&beds=Any&baths=Any&min_sq_ft=&max_sq_ft=&min_year=Any&garage=Any&just_listed=&include_sold=&foreclosure=&short_sale=&pool=&spa=&guest_house=&waterfront=&sort=price-asc&gated=&sort=price-asc&page=1&pagination=get&dfltLat=26.1503648&dfltLng=-81.7946717&aNord=&aEst=&aSud=&aOvest=&zoom=11",
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
