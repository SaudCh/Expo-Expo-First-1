import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  FlatList,
} from "react-native";
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

          <Select
            selectedValue={city}
            minWidth="200"
            value={city}
            accessibilityLabel="All Cities"
            placeholder="All Cities"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={2}
            w={{
              base: "100%",
              md: "25%",
            }}
            style={{ backgroundColor: "white" }}
            onValueChange={(itemValue) => setCity(itemValue)}
          >
            <FlatList
              data={allCities}
              keyExtractor={({ city_id }, index) => city_id}
              renderItem={({ item }) => (
                <Select.Item label={item.name} value={item.name} />
              )}
            />
          </Select>
          <Select
            selectedValue={minValue}
            minWidth="200"
            value={minValue}
            accessibilityLabel="Min"
            placeholder="Min"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={2}
            w={{
              base: "100%",
              md: "25%",
            }}
            style={{ backgroundColor: "white" }}
            onValueChange={(itemValue) => setMinValue(itemValue)}
          >
            <FlatList
              data={price}
              keyExtractor={({ value }, index) => value}
              renderItem={({ item }) => (
                <Select.Item label={item.name} value={item.value} />
              )}
            />
          </Select>
          <Select
            selectedValue={maxValue}
            minWidth="200"
            value={maxValue}
            accessibilityLabel="Max"
            placeholder="Max"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            my={2}
            w={{
              base: "100%",
              md: "25%",
            }}
            style={{ backgroundColor: "white" }}
            onValueChange={(itemValue) => setMaxValue(itemValue)}
          >
            <FlatList
              data={price}
              keyExtractor={({ value }, index) => value}
              renderItem={({ item }) => (
                <Select.Item label={item.name} value={item.value} />
              )}
            />
          </Select>
          <Button style={{ backgroundColor: "#09AFFF" }}>Quick Search</Button>
        </View>
        <Button
          style={{ width: "90%", marginTop: 10, backgroundColor: "#09AFFF" }}
        >
          Advance MLS Search
        </Button>
        <Button
          style={{ width: "90%", marginTop: 10, backgroundColor: "#09AFFF" }}
          onPress={() => props.navigation.openDrawer()}
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
