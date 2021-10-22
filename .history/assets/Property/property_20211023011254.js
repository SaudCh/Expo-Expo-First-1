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
import Equipment from "./Equipment";
import Exterior from "./Exterior";
import Interior from "./Interior";
import Amenities from "./Amenities";
import Remarks from "./Remarks";
import Details from "./Details";
import Basic from "./Basic";

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

  const priceConversion = (price) => {
    price = price.substring(0, price.length - 3);
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <NativeBaseProvider>
      <Header />
      <ScrollView style={{ paddingHorizontal: 10 }}>
        <Image
          source={{ uri: `https://first1.us/${item.DefaultPic}` }}
          style={{ width: "100%", height: 200 }}
        />

        <Basic item={item} />
        <Details item={item} />
        <Remarks item={item} />
        <Amenities item={item} />
        <Interior item={item} />
        <Exterior item={item} />
        <Equipment item={item} />
        <Description item={item} />
        <Map item={item} />
        <WalkScore wal={wal} score={score} />
      </ScrollView>
    </NativeBaseProvider>
  );
}
