import React, { useState } from "react";
import { View, Text, StyleSheet, Picker } from "react-native";
import {
  HStack,
  Input,
  NativeBaseProvider,
  Select,
  CheckIcon,
  Checkbox,
  ScrollView,
  Button,
} from "native-base";
import Header from "../Shared/header";
import Footer from "../Shared/Footer";

export default function AdvanceSearch(props) {
  let [propertyType, setPropertyType] = useState();
  let [justListing, setJustListing] = useState();
  let [text, setText] = useState();
  let [city, setCity] = useState();

  return (
    <NativeBaseProvider>
      <Header navigation={props.navigation} />
      <ScrollView>
        <View style={{ ...styles.container }}>
          <Text style={{ ...styles.Heading }}>Advance MLS Search</Text>
          {/****************Quick Search*****************/}
          <View>
            <Text style={{ ...styles.text, marginBottom: 10 }}>
              Quick Search
            </Text>
            <Input
              value={text}
              onChangeText={setText}
              isFullWidth="false"
              style={styles.SearchBar}
              placeholder="Enter a community, Addreess or Zip Code..."
            />
          </View>
          <Text
            style={{
              marginTop: 15,
              ...styles.text,
              color: "#09AFFF",
              borderBottomColor: "#09afff",
              borderBottomWidth: 3,
              borderStyle: "dotted",
              width: "90%",
            }}
          >
            Search Criteria:
          </Text>
          {/****************Property Type*****************/}
          <View style={{ marginVertical: 15 }}>
            <Text style={{ ...styles.text }}>Property Type</Text>

            <View
              style={{
                borderWidth: 1,
                borderRadius: 5,
                borderColor: "#dee2e6",
                marginRight: 35,
                //marginVertical: 10,
              }}
            >
              <Picker
                selectedValue={propertyType}
                style={{ height: 45 }}
                onValueChange={(itemValue, itemIndex) =>
                  setPropertyType(itemValue)
                }
              >
                <Picker.Item label="Property Type" value="Any" />
                <Picker.Item label="Homes" value="Homes" />
                <Picker.Item label="Condos" value="Condos" />
                <Picker.Item label="Vacant Land" value="Vacant Land" />
                <Picker.Item label="Commercial" value="Commercial" />
                <Picker.Item label="Multi-Family" value="Multi Family" />
                <Picker.Item label="Town Homes" value="Town Homes" />
                <Picker.Item label="Boat Dock" value="Boat Dock" />
              </Picker>
            </View>
          </View>
          {/****************City*****************/}
          <View style={{ marginBottom: 15 }}>
            <Text style={{ ...styles.text }}>City</Text>
            <View
              style={{
                borderWidth: 1,
                borderRadius: 5,
                borderColor: "#dee2e6",
                marginRight: 35,
                //marginVertical: 10,
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
          </View>
          <Text style={{ fontSize: 20, alignSelf: "center", marginBottom: 15 }}>
            --OR--
          </Text>
          {/****************Zip code*****************/}
          <View>
            <Text style={{ ...styles.text, marginBottom: 10 }}>Zip Code</Text>
            <Input
              isFullWidth="false"
              style={{ ...styles.SearchBar, marginBottom: 15 }}
              placeholder="e.g. 34109,34110"
            />
          </View>
          {/****************Check Box 1*****************/}
          <View>
            <Checkbox.Group
              colorScheme="green"
              defaultValue={justListing}
              accessibilityLabel="pick an item"
              onChange={(values) => {
                setJustListing(values || []);
              }}
            >
              <Checkbox value="Just Listed" my="2">
                Just Listed
              </Checkbox>
              <Checkbox value="Include Pending" my="2">
                Include Pending
              </Checkbox>
              <Checkbox value="Include Sold" my="2">
                Include Sold
              </Checkbox>
              <Checkbox value="Foreclosure" my="2">
                Foreclosure
              </Checkbox>
              <Checkbox value="Short Sale" my="2">
                Short Sale
              </Checkbox>
            </Checkbox.Group>
          </View>
          <View>
            <Text
              style={{
                marginTop: 15,
                ...styles.text,
                color: "#09AFFF",
                borderBottomColor: "#09afff",
                borderBottomWidth: 3,
                borderStyle: "dotted",
                width: "90%",
                marginBottom: 15,
              }}
            >
              Advance Search:
            </Text>
            {/****************Max Price*****************/}
            <View>
              <Text style={{ ...styles.text, marginBottom: 10 }}>
                Min Price
              </Text>
              <Input
                isFullWidth="false"
                style={{ ...styles.SearchBar, marginBottom: 15 }}
                placeholder="Minimum price"
              />
            </View>
            {/****************Max Price*****************/}
            <View>
              <Text style={{ ...styles.text, marginBottom: 10 }}>
                Max Price
              </Text>
              <Input
                isFullWidth="false"
                style={{ ...styles.SearchBar, marginBottom: 15 }}
                placeholder="Maximum price"
              />
            </View>
            {/****************No of Baths*****************/}
            <View style={{ marginBottom: 15 }}>
              <Text style={{ ...styles.text }}>Beds</Text>
              <View
                style={{
                  borderWidth: 1,
                  borderRadius: 5,
                  borderColor: "#dee2e6",
                  marginRight: 35,
                  //marginVertical: 10,
                }}
              >
                <Picker>
                  <Picker.Item label="Any Number of Beds" value="Any" />
                  <Picker.Item label="1+" value="1+" />
                  <Picker.Item label="1+ Den" value="1+Den" />
                  <Picker.Item label="2+" value="2+" />
                  <Picker.Item label="2+ Den" value="2+Den" />
                  <Picker.Item label="3+" value="3+" />
                  <Picker.Item label="3+ Den" value="3+Den" />
                  <Picker.Item label="4+" value="4+" />
                  <Picker.Item label="4+ Den" value="4+Den" />
                  <Picker.Item label="5+" value="5+" />
                  <Picker.Item label="5+ Den" value="5+Den" />
                  <Picker.Item label="6+" value="6+" />
                  <Picker.Item label="6+ Den" value="6+Den" />
                  <Picker.Item label="7+" value="7+" />
                  <Picker.Item label="7+ Den" value="7+Den" />
                  <Picker.Item label="8+" value="8+" />
                  <Picker.Item label="8+ Den" value="8+Den" />
                  <Picker.Item label="9+" value="9+" />
                  <Picker.Item label="9+ Den" value="9+Den" />
                  <Picker.Item label="10+" value="10+" />
                  <Picker.Item label="10+ Den" value="10+Den" />
                </Picker>
              </View>
            </View>
            {/****************No of Baths*****************/}
            <View style={{ marginBottom: 15 }}>
              <Text style={{ ...styles.text }}>Baths</Text>
              <View
                style={{
                  borderWidth: 1,
                  borderRadius: 5,
                  borderColor: "#dee2e6",
                  marginRight: 35,
                  //marginVertical: 10,
                }}
              >
                <Picker>
                  <Picker.Item label="Any Number of Bath" value="Any" />
                  <Picker.Item label="1 Bath" value="1+" />
                  <Picker.Item label="2+ Bath" value="2+" />
                  <Picker.Item label="3+ Bath" value="3+" />
                  <Picker.Item label="4+ Bath" value="4+" />
                  <Picker.Item label="5+ Bath" value="5+" />
                  <Picker.Item label="6+ Bath" value="6+" />
                  <Picker.Item label="7+ Bath" value="7+" />
                  <Picker.Item label="8+ Bath" value="8+" />
                  <Picker.Item label="9+ Bath" value="9+" />
                  <Picker.Item label="10+ Bath" value="10+" />
                </Picker>
              </View>
            </View>
            {/****************Year Build*****************/}
            <View style={{ marginBottom: 15 }}>
              <Text style={{ ...styles.text }}>Year Build</Text>
              <View
                style={{
                  borderWidth: 1,
                  borderRadius: 5,
                  borderColor: "#dee2e6",
                  marginRight: 35,
                  //marginVertical: 10,
                }}
              >
                <Picker>
                  <Picker.Item label="Any Year" value="Any" />
                  <Picker.Item label="1990 +" value="1990 +" />
                  <Picker.Item label="2000 +" value="2000 +" />
                  <Picker.Item label="2005 +" value="2005 +" />
                  <Picker.Item label="2010 +" value="2010 +" />
                  <Picker.Item label="2015 +" value="2015 +" />
                  <Picker.Item label="2016 +" value="2016 +" />
                  <Picker.Item label="2017 +" value="2017 +" />
                  <Picker.Item label="2018 +" value="2018 +" />
                  <Picker.Item label="2019 +" value="2019 +" />
                  <Picker.Item label="2020 +" value="2020 +" />
                  <Picker.Item label="2021 +" value="2021 +" />
                </Picker>
              </View>
            </View>
            {/****************Garage Spaces*****************/}
            <View style={{ marginBottom: 15 }}>
              <Text style={{ ...styles.text }}>Garage Spaces</Text>
              <View
                style={{
                  borderWidth: 1,
                  borderRadius: 5,
                  borderColor: "#dee2e6",
                  marginRight: 35,
                  //marginVertical: 10,
                }}
              >
                <Picker>
                  <Picker.Item label="Garage" value="Any" />
                  <Picker.Item label="1" value="1" />
                  <Picker.Item label="1" value="1+" />
                  <Picker.Item label="2+" value="2+" />
                  <Picker.Item label="3+" value="3+" />
                  <Picker.Item label="4+" value="4+" />
                  <Picker.Item label="5+" value="5+" />
                  <Picker.Item label="6+" value="6+" />
                  <Picker.Item label="7+" value="7+" />
                  <Picker.Item label="8+" value="8+" />
                  <Picker.Item label="9+" value="9+" />
                  <Picker.Item label="10+" value="10+" />
                </Picker>
              </View>
            </View>
            {/****************Check Box 2*****************/}
            <View>
              <Checkbox.Group
                colorScheme="green"
                defaultValue={justListing}
                accessibilityLabel="pick an item"
                onChange={(values) => {
                  setJustListing(values || []);
                }}
              >
                <Checkbox value="Pool" my="2">
                  Pool
                </Checkbox>
                <Checkbox value="Spa" my="2">
                  Spa
                </Checkbox>
                <Checkbox value="Guest House" my="2">
                  Guest House
                </Checkbox>
                <Checkbox value="Gatted Community" my="2">
                  Gatted Community
                </Checkbox>
                <Checkbox value="Waterfront" my="2">
                  Waterfront
                </Checkbox>
                <Checkbox value="Gulf Access" my="2">
                  Gulf Access
                </Checkbox>
              </Checkbox.Group>
            </View>
            {/****************Minimum area square*****************/}
            <View style={{ marginTop: 15 }}>
              <Text style={{ ...styles.text, marginBottom: 10 }}>
                Min Living Area Sq.Ft
              </Text>
              <Input
                isFullWidth="false"
                style={{ ...styles.SearchBar, marginBottom: 15 }}
                placeholder="Minimum Living Area Sq.Ft"
              />
            </View>
            {/****************Max Living Area Sq.Ft*****************/}
            <View>
              <Text style={{ ...styles.text, marginBottom: 10 }}>
                Max Living Area Sq.Ft
              </Text>
              <Input
                isFullWidth="false"
                style={{ ...styles.SearchBar, marginBottom: 15 }}
                placeholder="Maximum Living Area Sq.Ft"
              />
            </View>
            <Text
              style={{
                ...styles.text,
                color: "#09AFFF",
                borderBottomColor: "#09afff",
                borderBottomWidth: 3,
                borderStyle: "dotted",
                width: "90%",
              }}
            >
              Select Communities:
            </Text>
            <Text
              style={{
                marginTop: 15,
                ...styles.text,
                color: "#09AFFF",
                borderBottomColor: "#09afff",
                borderBottomWidth: 3,
                borderStyle: "dotted",
                width: "90%",
              }}
            >
              MLS Search:
            </Text>
            {/****************MLS Search*****************/}
            <View style={{ marginVertical: 15 }}>
              <Text style={{ ...styles.text, marginBottom: 10 }}>
                MLS Number
              </Text>
              <Input
                isFullWidth="false"
                style={styles.SearchBar}
                placeholder="Enter MLS Number"
              />
            </View>
            {/************** Buttons ***********/}
            <View style={{ marginBottom: 30 }}>
              <Button
                style={{
                  width: "90%",
                  marginTop: 10,
                  backgroundColor: "#09AFFF",
                }}
              >
                Search
              </Button>
              <Button
                style={{
                  width: "90%",
                  marginTop: 10,
                  backgroundColor: "#09AFFF",
                }}
              >
                Save this Search
              </Button>
            </View>
          </View>
        </View>
        <Footer navigation={props.navigation} />
      </ScrollView>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginTop: 20,
    paddingTop: 20,
    paddingLeft: 20,
    backgroundColor: "white",
    borderRadius: 20,
  },
  Heading: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: "#2D3954",
  },
  SearchBar: {
    width: "90%",
    backgroundColor: "white",
  },
  text: {
    fontWeight: "600",
    fontSize: 20,
  },
});
