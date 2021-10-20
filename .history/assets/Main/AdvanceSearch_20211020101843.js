import React, { useState } from "react";
import { View, Text, StyleSheet, CheckIcon } from "react-native";
import { Input, NativeBaseProvider, Select } from "native-base";
import Header from "../Shared/header";

export default function AdvanceSearch() {
  const [propertyType, setPropertyType] = useState("Property Type");
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
            selectedValue={propertyType}
            minWidth="200"
            accessibilityLabel="Choose Service"
            placeholder="Choose Service"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(itemValue) => setPropertyType(itemValue)}
          >
            <Select.Item label="UX Research" value="ux" />
            <Select.Item label="Web Development" value="web" />
            <Select.Item label="Cross Platform Development" value="cross" />
            <Select.Item label="UI Designing" value="ui" />
            <Select.Item label="Backend Development" value="backend" />
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
