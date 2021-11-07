import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Header from "../Shared/header";
import {
  Entypo,
  Ionicons,
  FontAwesome,
  AntDesign,
  FontAwesome5,
  EvilIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export default function Details(props) {
  const { item } = props;

  const totalArea = (area) => {
    return area.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const bedAndGar = (val) => {
    return val.substring(0, val.length - 3);
  };

  return (
    <View style={{ ...styles.card }}>
      <View style={{ ...styles.box, flexDirection: "row" }}>
        <Ionicons
          name="ios-bed-outline"
          size={35}
          color="black"
          style={{ marginRight: 10 }}
        />
        <View>
          <Text style={{ ...styles.text1, fontWeight: "bold" }}>
            {item.Bedrooms}
          </Text>
          <Text style={{ ...styles.text2 }}>Bedrooms</Text>
        </View>
      </View>

      <View style={{ ...styles.box, flexDirection: "row" }}>
        <MaterialCommunityIcons
          name="shower"
          size={35}
          color="black"
          style={{ marginRight: 10 }}
        />
        <View>
          <Text style={{ ...styles.text1, fontWeight: "bold" }}>
            {bedAndGar(item.BathsTotal)} Bathrooms
          </Text>
          <Text style={{ ...styles.text2 }}>Bathrooms</Text>
        </View>
      </View>

      <View style={{ ...styles.box, flexDirection: "row" }}>
        <AntDesign
          name="car"
          size={35}
          color="black"
          style={{ marginRight: 10 }}
        />
        <View>
          <Text style={{ ...styles.text1, fontWeight: "bold" }}>
            {bedAndGar(item.GarageSpaces)} Garage
          </Text>
          <Text style={{ ...styles.text2 }}>Car Garage</Text>
        </View>
      </View>

      <View style={{ ...styles.box, flexDirection: "row" }}>
        <Entypo
          name="map"
          size={35}
          color="black"
          style={{ marginRight: 10 }}
        />
        <View>
          <Text style={{ ...styles.text1, fontWeight: "bold" }}>
            {totalArea(item.TotalArea)} Sq Ft
          </Text>
          <Text style={{ ...styles.text2 }}>Living Area</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.upperText }}>{item.PropertyType}</Text>
          <Text style={{ ...styles.LowerText }}>Property Type</Text>
        </View>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.upperText }}>{item.YearBuilt}</Text>
          <Text style={{ ...styles.LowerText }}>Year Build</Text>
        </View>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.upperText }}>{item.Status}</Text>
          <Text style={{ ...styles.LowerText }}>Status</Text>
        </View>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.upperText }}>{item.BathsFull}</Text>
          <Text style={{ ...styles.LowerText }}>Bath Full</Text>
        </View>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.upperText }}>{item.BathsHalf}</Text>
          <Text style={{ ...styles.LowerText }}>Bath Half</Text>
        </View>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.upperText }}>{item.BedsTotal}</Text>
          <Text style={{ ...styles.LowerText }}>Beds Total</Text>
        </View>

        {true ? (
          <View style={{ ...styles.box }}>
            <Text style={{ ...styles.upperText }}>{item.BuildingDesign}</Text>
            <Text style={{ ...styles.LowerText }}>Building Design</Text>
          </View>
        ) : (
          <View></View>
        )}
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.upperText }}>
            {item.CableAvailableYN ? "Yes" : "No"}
          </Text>
          <Text style={{ ...styles.LowerText }}>Cable</Text>
        </View>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.upperText }}>{item.Construction}</Text>
          <Text style={{ ...styles.LowerText }}>Construction</Text>
        </View>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.upperText }}>{item.Cooling}</Text>
          <Text style={{ ...styles.LowerText }}>Cooling</Text>
        </View>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.upperText }}>{item.Electric}</Text>
          <Text style={{ ...styles.LowerText }}>Electric</Text>
        </View>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.upperText }}>{item.Flooring}</Text>
          <Text style={{ ...styles.LowerText }}>Flooring</Text>
        </View>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.upperText }}>{item.Heat}</Text>
          <Text style={{ ...styles.LowerText }}>Heat</Text>
        </View>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.upperText }}>{item.NumUnitFloor}</Text>
          <Text style={{ ...styles.LowerText }}>Number of Unit Floor</Text>
        </View>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.upperText }}>
            {item.NumberDockHighDoors}
          </Text>
          <Text style={{ ...styles.LowerText }}>Dock High Doors</Text>
        </View>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.upperText }}>{item.NumberOfBays}</Text>
          <Text style={{ ...styles.LowerText }}>Number of Bays</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.upperText }}>{item.LandSqFt}</Text>
          <Text style={{ ...styles.LowerText }}>Land SqFt</Text>
        </View>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.upperText }}>{item.LotType}</Text>
          <Text style={{ ...styles.LowerText }}>Lot Type</Text>
        </View>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.upperText }}>{item.LotUnit}</Text>
          <Text style={{ ...styles.LowerText }}>Lot Unit</Text>
        </View>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.upperText }}>
            {item.NumberOfParcelsLots}
          </Text>
          <Text style={{ ...styles.LowerText }}>Number of Parcels Lots</Text>
        </View>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.upperText }}>{item.PricePerAcre}</Text>
          <Text style={{ ...styles.LowerText }}>Price Per Acre</Text>
        </View>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.upperText }}>
            {item.PrivatePoolYN ? "Yes" : "No"}
          </Text>
          <Text style={{ ...styles.LowerText }}>Private Pool</Text>
        </View>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.upperText }}>
            {item.PrivateSpaYN ? "Yes" : "No"}
          </Text>
          <Text style={{ ...styles.LowerText }}>Private Spa</Text>
        </View>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.upperText }}>{item.TotalFloors}</Text>
          <Text style={{ ...styles.LowerText }}>Total Floors</Text>
        </View>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.upperText }}>{item.UnitCount}</Text>
          <Text style={{ ...styles.LowerText }}>Unit Count</Text>
        </View>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.upperText }}>{item.UnitFloor}</Text>
          <Text style={{ ...styles.LowerText }}>Unit Floor</Text>
        </View>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.upperText }}>{item.UnitNumber}</Text>
          <Text style={{ ...styles.LowerText }}>Unit Number</Text>
        </View>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.upperText }}>{item.UnitsinBuilding}</Text>
          <Text style={{ ...styles.LowerText }}>Units in Building</Text>
        </View>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.upperText }}>{item.UnitsinComplex}</Text>
          <Text style={{ ...styles.LowerText }}>Unit in Complex</Text>
        </View>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.upperText }}>{item.UtilitiesAvailable}</Text>
          <Text style={{ ...styles.LowerText }}>Utilities Available</Text>
        </View>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.upperText }}>
            {JSON.parse(item.other_fields_json).View}
          </Text>
          <Text style={{ ...styles.LowerText }}>View</Text>
        </View>

        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.upperText }}>{item.Water}</Text>
          <Text style={{ ...styles.LowerText }}>Water</Text>
        </View>

        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.upperText }}>
            {item.WaterfrontYN ? "Yes" : "No"}
          </Text>
          <Text style={{ ...styles.LowerText }}>Water Front</Text>
        </View>
      </View>

      {/*** */}
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
  text1: {
    textAlign: "left",
  },
  text2: {
    textAlign: "left",
  },
  text3: {
    textAlign: "right",
  },
  text4: {
    textAlign: "right",
  },
  box: {
    marginVertical: 10,
    width: "50%",
  },
});
