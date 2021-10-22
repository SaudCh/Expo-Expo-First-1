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
import { Button, NativeBaseProvider } from "native-base";
import Map from "./Map";
import WalkScore from "./WalkScore";
import Description from "./Description";

export default function Property(props) {
  const { route } = props;
  const { item } = route.params;
  const [score, setScore] = useState("");
  const [wal, setWalk] = useState("");

  const getWalkScore = async () => {
    try {
      const response = await fetch(
        `https://first1.us/api/Function/getWalkScore.php?lat=${item.Latitude}&lon=${item.Longitude}&address=${item.PropertyAddress}`
      );
      const json = await response.json();
      //const data = JSON.parse(json);
      //console.log(json.walkscore);

      setScore(json.bike);
      setWalk(json);
    } catch (error) {
      console.error(error);
    } finally {
      //setLoading(false);
    }
  };

  useEffect(() => {
    getWalkScore();
  }, []);

  var InteriorFeatures = item.InteriorFeatures;
  InteriorFeatures = InteriorFeatures.split(",");

  var Amenities = item.Amenities;
  Amenities = Amenities.split(",");

  var ExteriorFeatures = item.ExteriorFeatures;
  ExteriorFeatures = ExteriorFeatures.split(",");

  var Equipment = item.Equipment;
  Equipment = Equipment.split(",");

  const priceConversion = (price) => {
    price = price.substring(0, price.length - 3);
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const totalArea = (area) => {
    return area.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const bedAndGar = (val) => {
    return val.substring(0, val.length - 3);
  };

  return (
    <NativeBaseProvider>
      <Header />
      <ScrollView style={{ paddingHorizontal: 10 }}>
        <Image
          source={{ uri: `https://first1.us/${item.DefaultPic}` }}
          style={{ width: "100%", height: 200 }}
        />
        {/***** card 1*****/}
        <View style={{ ...styles.card2 }}>
          <View style={{ marginVertical: 10 }}>
            <Button style={{ backgroundColor: "#00A600", width: "45%" }}>
              {item.Status}
            </Button>
          </View>

          <View style={{ marginBottom: 10 }}>
            {item.PotentialShortSaleYN === "0" ? (
              <View></View>
            ) : (
              <Button style={{ width: "45%" }}>
                {item.PotentialShortSaleYN}
              </Button>
            )}
            {item.ForeclosedREOYN === "0" ? (
              <View></View>
            ) : (
              <Button style={{ width: "45%" }}>{item.ForeclosedREOYN}</Button>
            )}
          </View>

          <Text style={{ ...styles.Heading, marginBottom: 10 }}>
            {item.SubCondoName}
          </Text>
          <Text style={{ ...styles.Heading2, marginBottom: 10 }}>
            <EvilIcons
              name="location"
              size={24}
              color="#72809D"
              style={{ marginRight: 10 }}
            />
            {item.PropertyAddress}
          </Text>
          <Text style={{ ...styles.Heading2, marginBottom: 10 }}>
            <Ionicons
              name="menu"
              size={25}
              color="#72809D"
              style={{ marginRight: 10 }}
            />
            MLS #:{item.MLSNumber}
          </Text>
          <Text style={{ ...styles.Heading, marginBottom: 10 }}>
            ${priceConversion(item.CurrentPrice)}
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginVertical: 5,
              paddingTop: 10,
              borderTopWidth: 1,
            }}
          >
            <TouchableOpacity style={{ ...styles.btnContainer }}>
              <AntDesign name="hearto" size={25} color="#0078B3" />
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.btnContainer }}>
              <FontAwesome5 name="envelope" size={25} color="#0078B3" />
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.btnContainer }}>
              <FontAwesome name="share" size={25} color="#0078B3" />
            </TouchableOpacity>
          </View>
        </View>
        {/***** card 2*****/}
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

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
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

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
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

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
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

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
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

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ ...styles.box }}>
              <Text style={{ ...styles.text1, fontWeight: "bold" }}>
                {item.Construction}
              </Text>
              <Text style={{ ...styles.text2 }}>Construction</Text>
            </View>
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ ...styles.box }}>
              <Text style={{ ...styles.text1, fontWeight: "bold" }}>
                {item.Cooling}
              </Text>
              <Text style={{ ...styles.text2 }}>Cooling</Text>
            </View>
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
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

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
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

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
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

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
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

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
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

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
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

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
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

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
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

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
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

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
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

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
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

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
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

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ ...styles.box }}>
              <Text style={{ ...styles.text1, fontWeight: "bold" }}>
                {item.WaterfrontYN ? "Yes" : "No"}
              </Text>
              <Text style={{ ...styles.text2 }}>Water Front</Text>
            </View>
          </View>
          {/*** */}
        </View>
        {/********Card 3*******/}
        <View style={{ ...styles.card2 }}>
          <Text
            style={{ fontSize: 30, textAlign: "center", fontWeight: "bold" }}
          >
            Remarks
          </Text>
          <Text style={{ fontSize: 17, lineHeight: 25 }}>
            {item.PropertyInformation}
          </Text>
        </View>
        {/***********Card 4************** */}
        {item.Amenities != "" &&
        item.Amenities != "None" &&
        item.Amenities != "Other" ? (
          <View style={{ ...styles.card2 }}>
            <Text
              style={{ fontSize: 30, textAlign: "center", fontWeight: "bold" }}
            >
              Amenities
            </Text>
            {Amenities.map((res) => (
              <View style={{ flexDirection: "row", marginVertical: 5 }}>
                <View
                  style={{
                    height: 30,
                    width: 30,
                    backgroundColor: "#B9E9FF",
                    borderRadius: 15,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FontAwesome name="check" size={20} color="#0084C4" />
                </View>
                <Text style={{ fontSize: 17, marginLeft: 10, marginTop: 2 }}>
                  {res}
                </Text>
              </View>
            ))}
            {/* </Text> */}
          </View>
        ) : (
          <View></View>
        )}
        {/*************Card 5*****************/}
        {item.InteriorFeatures != "" &&
        item.InteriorFeatures != "None" &&
        item.InteriorFeatures != "Other" ? (
          <View style={{ ...styles.card2 }}>
            <Text
              style={{ fontSize: 30, textAlign: "center", fontWeight: "bold" }}
            >
              Interior Features
            </Text>
            {InteriorFeatures.map((res) => (
              <View style={{ flexDirection: "row", marginVertical: 5 }}>
                <View
                  style={{
                    height: 30,
                    width: 30,
                    backgroundColor: "#B9E9FF",
                    borderRadius: 15,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FontAwesome name="check" size={20} color="#0084C4" />
                </View>
                <Text style={{ fontSize: 17, marginLeft: 10, marginTop: 2 }}>
                  {res}
                </Text>
              </View>
            ))}
          </View>
        ) : (
          <View></View>
        )}

        {/*************Card 6*****************/}
        {item.ExteriorFeatures != "" &&
        item.ExteriorFeatures != "None" &&
        item.ExteriorFeatures != "Other" ? (
          <View style={{ ...styles.card2 }}>
            <Text
              style={{ fontSize: 30, textAlign: "center", fontWeight: "bold" }}
            >
              Exterior Features
            </Text>
            {ExteriorFeatures.map((res) => (
              <View style={{ flexDirection: "row", marginVertical: 5 }}>
                <View
                  style={{
                    height: 30,
                    width: 30,
                    backgroundColor: "#B9E9FF",
                    borderRadius: 15,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FontAwesome name="check" size={20} color="#0084C4" />
                </View>
                <Text style={{ fontSize: 17, marginLeft: 10, marginTop: 2 }}>
                  {res}
                </Text>
              </View>
            ))}
          </View>
        ) : (
          <View></View>
        )}

        {/*************Card 7*****************/}
        <Equipment item={item} />

        <Description item={item} />

        <Map item={item} />

        <WalkScore wal={wal} score={score} />
      </ScrollView>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  Heading: {
    fontSize: 25,
    color: "#2D3954",
    fontWeight: "700",
  },
  Heading2: {
    color: "#72809D",
    fontSize: 20,
    fontWeight: "700",
  },
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
