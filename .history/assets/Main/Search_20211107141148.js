import React, { useEffect, useState } from "react";
import { StyleSheet, Text, ImageBackground, View, Picker } from "react-native";
import { Input, Select, VStack, CheckIcon, Button } from "native-base";
import { getPrice } from "../Data/price";
import { getCities } from "../Data/cities";

export default function Search(props) {
  //const { allCities } = props;
  //console.log(allCities);
  const allCities = getCities();
  const price = getPrice();
  let [minValue, setMinValue] = useState("");
  let [maxValue, setMaxValue] = useState("");
  let [city, setCity] = useState("");
  return (
    <View style={{ ...styles.SearchContainer }}>
      <ImageBackground
        source={require("../img/logo/south-florida-homes-for-sale-header.jpg")}
        resizeMode="cover"
        style={styles.SearchImgBack}
      >
        <Text style={styles.SearchBarText}>
          We Are <Text style={{ color: "#09AFFF" }}>#1</Text>
        </Text>
        <Text style={styles.SearchBarText}>
          Because We Put You <Text style={{ color: "#09AFFF" }}>First</Text>
        </Text>
        <View
          style={{
            backgroundColor: "white",
            width: "90%",
            paddingHorizontal: 10,
            paddingBottom: 10,
            marginTop: 10,
          }}
        >
          <Input
            isFullWidth="false"
            style={styles.SearchBar}
            placeholder="Enter a community, Addreess or Zip Code..."
            mt={2}
          />
          <Picker
            selectedValue={city}
            style={{ height: 50 }}
            onValueChange={(itemValue, itemIndex) => setCity(itemValue)}
          >
            <Picker.Item label="Any" value="Any" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
          <View>
            <Picker
              selectedValue={minValue}
              style={{ height: 50 }}
              onValueChange={(itemValue, itemIndex) => setMinValue(itemValue)}
            >
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </View>
          <View>
            <Picker
              selectedValue={maxValue}
              style={{ height: 50 }}
              onValueChange={(itemValue, itemIndex) => setMaxValue(itemValue)}
            >
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </View>
          <Button style={{ backgroundColor: "#09AFFF" }}>Quick Search</Button>
        </View>
        <Button
          style={{ width: "90%", marginTop: 10, backgroundColor: "#09AFFF" }}
          onPress={() =>
            props.navigation.navigate("Main", { screen: "Advance Search" })
          }
        >
          Advance MLS Search
        </Button>
        <Button
          style={{ width: "90%", marginTop: 10, backgroundColor: "#09AFFF" }}
          // onPress={() => props.navigation.openDrawer()}
          onPress={() => props.navigation.navigate("MapSearch")}
        >
          Map Search
        </Button>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  SearchContainer: {
    flex: 1,
    marginBottom: 10,
  },
  SearchImgBack: {
    width: "100%",
    height: 500,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  SearchBar: {
    width: "100%",
    backgroundColor: "white",
  },
  SearchBarText: {
    fontSize: 32,
    fontWeight: "bold",
  },
});
