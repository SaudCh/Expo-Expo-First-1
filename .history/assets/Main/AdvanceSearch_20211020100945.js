import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input, NativeBaseProvider, Select } from "native-base";
import Header from "../Shared/header";

export default function AdvanceSearch() {
  return (
    <NativeBaseProvider>
      <View>
        <Header />
        <View style={{ ...styles.container }}>
          <Text style={{ ...styles.Heading }}>Advance MLS Search</Text>
          <Text style={{ ...styles.text, marginBottom: 10 }}>Quick Search</Text>
          <Input
            isFullWidth="false"
            style={styles.SearchBar}
            placeholder="Enter a community, Addreess or Zip Code..."
          />
          <Text
            style={{
              marginTop: 20,
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
          <Text style={{ ...styles.text, marginBottom: 10 }}>
            Property Type
          </Text>
          <Select
            //selectedValue={city}
            minWidth="200"
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
            <Select.Item label="Homes" value="Homes" />
            <Select.Item label="Condos" value="Condos" />
            <Select.Item label="Vacant Land" value="Vacant Land" />
            <Select.Item label="Commercial" value="Commercial" />
            <Select.Item label="Multi-Family" value="Multi-Family" />
            <Select.Item label="Town Homes" value="Town Homes" />
            <Select.Item label="Boat Dock" value="Boat Dock" />
          </Select>
        </View>
      </View>
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
    fontSize: 25,
    lineHeight: 36,
    marginBottom: 10,
    fontWeight: "700",
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
