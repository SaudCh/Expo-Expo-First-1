import React from "react";
import { View, Text } from "react-native";

export default function Details(props) {
  const { item } = props;

  const totalArea = (area) => {
    return area.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const bedAndGar = (val) => {
    return val.substring(0, val.length - 3);
  };
  return (
    <View style={{ ...styles.card2 }}>
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

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.text1, fontWeight: "bold" }}>
            {item.PropertyType}
          </Text>
          <Text style={{ ...styles.text2 }}>Property Type</Text>
        </View>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.text3, fontWeight: "bold" }}>
            {item.YearBuilt}
          </Text>
          <Text style={{ ...styles.text4 }}>Year Build</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.text1, fontWeight: "bold" }}>
            {item.Status}
          </Text>
          <Text style={{ ...styles.text2 }}>Status</Text>
        </View>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.text3, fontWeight: "bold" }}>
            {item.BathsFull}
          </Text>
          <Text style={{ ...styles.text4 }}>Bath Full</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.text1, fontWeight: "bold" }}>
            {item.BathsHalf}
          </Text>
          <Text style={{ ...styles.text2 }}>Bath Half</Text>
        </View>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.text3, fontWeight: "bold" }}>
            {item.BedsTotal}
          </Text>
          <Text style={{ ...styles.text4 }}>Beds Total</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.text1, fontWeight: "bold" }}>
            {item.BuildingDesign}
          </Text>
          <Text style={{ ...styles.text2 }}>Building Design</Text>
        </View>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.text3, fontWeight: "bold" }}>
            {item.CableAvailableYN ? "Yes" : "No"}
          </Text>
          <Text style={{ ...styles.text4 }}>Cable</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.text1, fontWeight: "bold" }}>
            {item.Construction}
          </Text>
          <Text style={{ ...styles.text2 }}>Construction</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.text1, fontWeight: "bold" }}>
            {item.Cooling}
          </Text>
          <Text style={{ ...styles.text2 }}>Cooling</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.text1, fontWeight: "bold" }}>
            {item.Electric}
          </Text>
          <Text style={{ ...styles.text2 }}>Electric</Text>
        </View>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.text3, fontWeight: "bold" }}>
            {item.Flooring}
          </Text>
          <Text style={{ ...styles.text4 }}>Flooring</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.text1, fontWeight: "bold" }}>
            {item.Heat}
          </Text>
          <Text style={{ ...styles.text2 }}>Heat</Text>
        </View>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.text3, fontWeight: "bold" }}>
            {item.NumUnitFloor}
          </Text>
          <Text style={{ ...styles.text4 }}>Number of Unit Floor</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.text1, fontWeight: "bold" }}>
            {item.NumberDockHighDoors}
          </Text>
          <Text style={{ ...styles.text2 }}>Dock High Doors</Text>
        </View>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.text3, fontWeight: "bold" }}>
            {item.NumberOfBays}
          </Text>
          <Text style={{ ...styles.text4 }}>Number of Bays</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.text1, fontWeight: "bold" }}>
            {item.NumUnitFloor}
          </Text>
          <Text style={{ ...styles.text2 }}>Number of Unit Floor</Text>
        </View>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.text3, fontWeight: "bold" }}>
            {item.NumberofLoadingDoors}
          </Text>
          <Text style={{ ...styles.text4 }}>Number of Loading Doors</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.text1, fontWeight: "bold" }}>
            {item.LandSqFt}
          </Text>
          <Text style={{ ...styles.text2 }}>Land SqFt</Text>
        </View>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.text3, fontWeight: "bold" }}>
            {item.LotType}
          </Text>
          <Text style={{ ...styles.text4 }}>Lot Type</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.text1, fontWeight: "bold" }}>
            {item.LotUnit}
          </Text>
          <Text style={{ ...styles.text2 }}>Lot Unit</Text>
        </View>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.text3, fontWeight: "bold" }}>
            {item.NumberOfParcelsLots}
          </Text>
          <Text style={{ ...styles.text4 }}>Number of Parcels Lots</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.text1, fontWeight: "bold" }}>
            {item.PricePerAcre}
          </Text>
          <Text style={{ ...styles.text2 }}>Price Per Acre</Text>
        </View>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.text3, fontWeight: "bold" }}>
            {item.PrivatePoolYN ? "Yes" : "No"}
          </Text>
          <Text style={{ ...styles.text4 }}>Private Pool</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.text1, fontWeight: "bold" }}>
            {item.PrivateSpaYN ? "Yes" : "No"}
          </Text>
          <Text style={{ ...styles.text2 }}>Private Spa</Text>
        </View>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.text3, fontWeight: "bold" }}>
            {item.TotalFloors}
          </Text>
          <Text style={{ ...styles.text4 }}>Total Floors</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.text1, fontWeight: "bold" }}>
            {item.UnitCount}
          </Text>
          <Text style={{ ...styles.text2 }}>Unit Count</Text>
        </View>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.text3, fontWeight: "bold" }}>
            {item.UnitFloor}
          </Text>
          <Text style={{ ...styles.text4 }}>Unit Floor</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.text1, fontWeight: "bold" }}>
            {item.UnitNumber}
          </Text>
          <Text style={{ ...styles.text2 }}>Unit Number</Text>
        </View>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.text3, fontWeight: "bold" }}>
            {item.UnitsinBuilding}
          </Text>
          <Text style={{ ...styles.text4 }}>Units in Building</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.text1, fontWeight: "bold" }}>
            {item.UnitsinComplex}
          </Text>
          <Text style={{ ...styles.text2 }}>Unit in Complex</Text>
        </View>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.text3, fontWeight: "bold" }}>
            {item.UtilitiesAvailable}
          </Text>
          <Text style={{ ...styles.text4 }}>Utilities Available</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.text1, fontWeight: "bold" }}>
            {JSON.parse(item.other_fields_json).View}
          </Text>
          <Text style={{ ...styles.text2 }}>View</Text>
        </View>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.text3, fontWeight: "bold" }}>
            {item.Water}
          </Text>
          <Text style={{ ...styles.text4 }}>Water</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ ...styles.box }}>
          <Text style={{ ...styles.text1, fontWeight: "bold" }}>
            {item.WaterfrontYN ? "Yes" : "No"}
          </Text>
          <Text style={{ ...styles.text2 }}>Water Front</Text>
        </View>
      </View>
      {/*** */}
    </View>
  );
}
const styles = StyleSheet.create({
  btnContainer: {
    padding: 5,
    backgroundColor: "#D5F1FF",
    marginHorizontal: 10,
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
  card2: {
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
  box: {
    marginVertical: 10,
  },
  wheel: {
    height: 60,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 5,
    borderRadius: 30,
  },
});
