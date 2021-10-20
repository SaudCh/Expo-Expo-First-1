import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  FlatList,
} from "react-native";
import { Input, Select, VStack, CheckIcon, Button } from "native-base";

export default function Search(props) {
  const { allCities } = props;
  //console.log(allCities);
  const price = [
    {
      name: "$50,000",
      value: "50000",
    },
    {
      name: "$100,000",
      value: "100000",
    },
    {
      name: "$150,000",
      value: "150000",
    },
    {
      name: "$200,000",
      value: "200000",
    },
    {
      name: "$250,000",
      value: "250000",
    },
    {
      name: "$300,000",
      value: "300000",
    },
    {
      name: "$350,000",
      value: "350000",
    },
    {
      name: "$400,000",
      value: "400000",
    },
    {
      name: "$450,000",
      value: "450000",
    },
    {
      name: "$500,000",
      value: "500000",
    },
    {
      name: "$550,000",
      value: "550000",
    },
    {
      name: "$650,000",
      value: "650000",
    },
    {
      name: "$700,000",
      value: "700000",
    },
    {
      name: "$750,000",
      value: "750000",
    },
    {
      name: "$800,000",
      value: "800000",
    },
    {
      name: "$850,000",
      value: "850000",
    },
    {
      name: "$900,000",
      value: "900000",
    },
    {
      name: "$950,000",
      value: "950000",
    },
    {
      name: "$1 Million",
      value: "1000000",
    },
    {
      name: "$1.5 Million",
      value: "1500000",
    },
    {
      name: "$2 Million",
      value: "2000000",
    },
    {
      name: "$2.5 Million",
      value: "2500000",
    },
    {
      name: "$3 Million",
      value: "3000000",
    },
    {
      name: "$3.5 Million",
      value: "3500000",
    },
    {
      name: "$4 Million",
      value: "4000000",
    },
    {
      name: "$4.5 Million",
      value: "4500000",
    },
    {
      name: "$5 Million",
      value: "5000000",
    },
    {
      name: "$6 Million",
      value: "6000000",
    },
    {
      name: "$7 Million",
      value: "7000000",
    },
    {
      name: "$10 Million",
      value: "10000000",
    },
    {
      name: "$15 Million",
      value: "15000000",
    },
    {
      name: "$20 Million",
      value: "20000000",
    },
    {
      name: "No Limit",
      value: "Any",
    },
  ];
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
