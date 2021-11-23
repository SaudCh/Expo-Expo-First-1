import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function savedSearchesCard(props) {
  const { item } = props;
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
    fontSize: 20,
    color: "#546cb1",
  },
  textContainer: {
    flexDirection: "row",
  },
});
