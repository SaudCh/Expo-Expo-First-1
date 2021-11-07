import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Description(props) {
  const { item } = props;
  return (
    <View style={{ ...styles.card }}>
      <Text style={{ ...styles.Heading }}>Description</Text>
      {item.AdditionalRooms ? (
        <View style={{ marginVertical: 5 }}>
          <Text style={{ fontSize: 17, marginLeft: 10, marginTop: 2 }}>
            {item.AdditionalRooms}
          </Text>
          <Text style={{ marginLeft: 10, fontWeight: "bold" }}>
            Additional Rooms
          </Text>
        </View>
      ) : (
        <View></View>
      )}

      {item.BedroomDesc ? (
        <View style={{ marginVertical: 5 }}>
          <Text style={{ fontSize: 17, marginLeft: 10, marginTop: 2 }}>
            {item.BedroomDesc}
          </Text>
          <Text style={{ marginLeft: 10, fontWeight: "bold" }}>
            Bedroom Description
          </Text>
        </View>
      ) : (
        <View></View>
      )}

      {item.CoolingRemarks ? (
        <View style={{ marginVertical: 5 }}>
          <Text style={{ fontSize: 17, marginLeft: 10, marginTop: 2 }}>
            {item.CoolingRemarks}
          </Text>
          <Text style={{ marginLeft: 10, fontWeight: "bold" }}>Cooling</Text>
        </View>
      ) : (
        <View></View>
      )}

      {item.CommunityType ? (
        <View style={{ marginVertical: 5 }}>
          <Text style={{ fontSize: 17, marginLeft: 10, marginTop: 2 }}>
            {item.CommunityType}
          </Text>
          <Text style={{ marginLeft: 10, fontWeight: "bold" }}>
            Community Type
          </Text>
        </View>
      ) : (
        <View></View>
      )}

      {item.Pets ? (
        <View style={{ marginVertical: 5 }}>
          <Text style={{ fontSize: 17, marginLeft: 10, marginTop: 2 }}>
            {item.Pets}
          </Text>
          <Text style={{ marginLeft: 10, fontWeight: "bold" }}>Pets</Text>
        </View>
      ) : (
        <View></View>
      )}
      {/*****Pets Limit****** */}
      {item.PetsLimitOther ? (
        <View style={{ marginVertical: 5 }}>
          <Text style={{ fontSize: 17, marginLeft: 10, marginTop: 2 }}>
            {item.PetsLimitOther}
          </Text>
          <Text style={{ marginLeft: 10, fontWeight: "bold" }}>
            Pets Limits
          </Text>
        </View>
      ) : (
        <View></View>
      )}
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
  Heading: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: "#2D3954",
    borderBottomColor: "#f5f6fa",
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 10,
  },
});
