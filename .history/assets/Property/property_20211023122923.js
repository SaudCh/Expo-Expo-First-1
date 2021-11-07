import React from "react";
import { ScrollView, View } from "react-native";
import Header from "../Shared/header";
import { NativeBaseProvider } from "native-base";
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
import Slider from "./Slider";
import School from "./School";
import Footer from "../Shared/Footer";
import Taxes from "./Taxes";
import HomeOwner from "./HomeOwner";
import Disclaimer from "./Disclaimer";

export default function Property(props) {
  const { route } = props;
  const { item } = route.params;

  return (
    <NativeBaseProvider>
      <Header />
      <ScrollView>
        <View style={{ padding: 10 }}>
          <Slider item={item} />
          <Basic item={item} />
          <Details item={item} />
          <Remarks item={item} />
          <Amenities item={item} />
          <Interior item={item} />
          <Exterior item={item} />
          <Equipment item={item} />
          <Description item={item} />
          <Map item={item} />
          <WalkScore item={item} />
          <School item={item} />
          <Taxes item={item} />
          <HomeOwner item={item} />
          <Disclaimer item={item} />
        </View>
        <Footer />
      </ScrollView>
    </NativeBaseProvider>
  );
}
