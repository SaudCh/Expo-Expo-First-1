import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  Picker,
  TextInput,
} from "react-native";
import { Button } from "native-base";
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
  let [text, setText] = useState("");

  const quickSearch = (text, city, min, max) => {
    console.log(text);
    console.log(city);
    console.log(min);
    console.log(max);
  };

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
          <View style={{ marginVertical: 10 }}>
            <TextInput
              value={text}
              onChange={setText}
              //isFullWidth="false"
              style={styles.SearchBar}
              placeholder="Enter a community, Addreess or Zip Code..."
            />
          </View>
          <View
            style={{
              borderWidth: 1,
              borderRadius: 5,
              borderColor: "#dee2e6",
              marginVertical: 10,
            }}
          >
            <Picker
              selectedValue={city}
              style={{ height: 45 }}
              onValueChange={(itemValue, itemIndex) => setCity(itemValue)}
            >
              <Picker.Item value="Any" label="All cities" />
              <Picker.Item value="Ave Maria" label="Ave Maria" />
              <Picker.Item value="Bonita Springs" label="Bonita Springs" />
              <Picker.Item value="Cape Coral" label="Cape Coral" />
              <Picker.Item value="Estero" label="Estero" />
              <Picker.Item value="Fort Myers" label="Fort Myers" />
              <Picker.Item value="Immokalee" label="Immokalee" />
              <Picker.Item value="Lehigh Acres" label="Lehigh Acres" />
              <Picker.Item value="Marco Island" label="Marco Island" />
              <Picker.Item value="Naples" label="Naples" />
            </Picker>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderRadius: 5,
              borderColor: "#dee2e6",
              marginVertical: 10,
            }}
          >
            <Picker
              selectedValue={minValue}
              style={{ height: 45 }}
              onValueChange={(itemValue, itemIndex) => setMinValue(itemValue)}
            >
              <Picker.Item value="Any" label="Min Price" />
              <Picker.Item value="50000" label="$50,000" />
              <Picker.Item value="100000" label="$100,000" />
              <Picker.Item value="150000" label="$150,000" />
              <Picker.Item value="200000" label="$200,000" />
              <Picker.Item value="250000" label="$250,000" />
              <Picker.Item value="300000" label="$300,000" />
              <Picker.Item value="350000" label="$350,000" />
              <Picker.Item value="400000" label="$400,000" />
              <Picker.Item value="450000" label="$450,000" />
              <Picker.Item value="500000" label="$500,000" />
              <Picker.Item value="550000" label="$550,000" />
              <Picker.Item value="600000" label="$600,000" />
              <Picker.Item value="650000" label="$650,000" />
              <Picker.Item value="700000" label="$700,000" />
              <Picker.Item value="750000" label="$750,000" />
              <Picker.Item value="800000" label="$800,000" />
              <Picker.Item value="850000" label="$850,000" />
              <Picker.Item value="900000" label="$900,000" />
              <Picker.Item value="950000" label="$950,000" />
              <Picker.Item value="1000000" label="$1 Million" />
              <Picker.Item value="1500000" label="$1.5 Million" />
              <Picker.Item value="2000000" label="$2 Million" />
              <Picker.Item value="2500000" label="$2.5 Million" />
              <Picker.Item value="3000000" label="$3 Million" />
              <Picker.Item value="3500000" label="$3.5 Million" />
              <Picker.Item value="4000000" label="$4 Million" />
              <Picker.Item value="4500000" label="$4.5 Million" />
              <Picker.Item value="5000000" label="$5 Million" />
              <Picker.Item value="6000000" label="$6 Million" />
              <Picker.Item value="7000000" label="$7 Million" />
              <Picker.Item value="10000000" label="$10 Million" />
              <Picker.Item value="15000000" label="$15 Million" />
              <Picker.Item value="20000000" label="$20 Million" />
              <Picker.Item value="Any" label="No Limit" />
            </Picker>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderRadius: 5,
              borderColor: "#dee2e6",
              marginVertical: 10,
            }}
          >
            <Picker
              selectedValue={maxValue}
              style={{ height: 45 }}
              onValueChange={(itemValue, itemIndex) => setMaxValue(itemValue)}
            >
              <Picker.Item value="Any" label="Max Price" />
              <Picker.Item value="50000" label="$50,000" />
              <Picker.Item value="100000" label="$100,000" />
              <Picker.Item value="150000" label="$150,000" />
              <Picker.Item value="200000" label="$200,000" />
              <Picker.Item value="250000" label="$250,000" />
              <Picker.Item value="300000" label="$300,000" />
              <Picker.Item value="350000" label="$350,000" />
              <Picker.Item value="400000" label="$400,000" />
              <Picker.Item value="450000" label="$450,000" />
              <Picker.Item value="500000" label="$500,000" />
              <Picker.Item value="550000" label="$550,000" />
              <Picker.Item value="600000" label="$600,000" />
              <Picker.Item value="650000" label="$650,000" />
              <Picker.Item value="700000" label="$700,000" />
              <Picker.Item value="750000" label="$750,000" />
              <Picker.Item value="800000" label="$800,000" />
              <Picker.Item value="850000" label="$850,000" />
              <Picker.Item value="900000" label="$900,000" />
              <Picker.Item value="950000" label="$950,000" />
              <Picker.Item value="1000000" label="$1 Million" />
              <Picker.Item value="1500000" label="$1.5 Million" />
              <Picker.Item value="2000000" label="$2 Million" />
              <Picker.Item value="2500000" label="$2.5 Million" />
              <Picker.Item value="3000000" label="$3 Million" />
              <Picker.Item value="3500000" label="$3.5 Million" />
              <Picker.Item value="4000000" label="$4 Million" />
              <Picker.Item value="4500000" label="$4.5 Million" />
              <Picker.Item value="5000000" label="$5 Million" />
              <Picker.Item value="6000000" label="$6 Million" />
              <Picker.Item value="7000000" label="$7 Million" />
              <Picker.Item value="10000000" label="$10 Million" />
              <Picker.Item value="15000000" label="$15 Million" />
              <Picker.Item value="20000000" label="$20 Million" />
              <Picker.Item value="Any" label="No Limit" />
            </Picker>
          </View>
          <Button
            style={{ backgroundColor: "#09AFFF" }}
            onPress={() => quickSearch(text, city, minValue, maxValue)}
          >
            Quick Search
          </Button>
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
