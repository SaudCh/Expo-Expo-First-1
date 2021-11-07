import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import { Button, NativeBaseProvider } from "native-base";
import Header from "../Shared/header";

export default function Buy(props) {
  return (
    <NativeBaseProvider>
      <Header backButton={true} navigation={props.navigation} />
      <ScrollView>
        <ImageBackground
          source={require("../img/florida-3.jpg")}
          resizeMode="cover"
          style={{
            height: 200,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "rgba(0,0,0,0.3)",
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
              Buying A Florida Home
            </Text>
          </View>
        </ImageBackground>
        <View style={{ padding: 10 }}>
          <Text style={{ ...styles.upperText }}>Buying A Florida Home</Text>
          <Text style={{ ...styles.LowerText }}>
            Fabulous new homes come on the market every day in Florida and many
            are sold before they've even been advertised. If you're looking for
            real estate in this area, you can beat other home buyers to the
            hottest new homes on the market by following these steps:
          </Text>
          <Image
            source={require("../img/info-img.jpg")}
            style={{ ...styles.InfoImage }}
          />
          <View
            style={{ ...styles.InfoNumberContainer, alignItems: "flex-start" }}
          >
            <View
              style={{
                ...styles.InfoNumber,
                backgroundColor: "rgba(255, 152, 0,0.1)",
              }}
            >
              <Text style={{ ...styles.InfoNumberText, color: "#ff9800" }}>
                01
              </Text>
            </View>
          </View>
          <Text style={{ ...styles.InfoHeading }}>Search Homes Right Now.</Text>
          <Text style={{ ...styles.InfoText }}>
            Fabulous new homes come on the market every day in SW Florida and
            many are sold before they've even been advertised. If you're looking
            for real estate in this area, you can beat other home buyers to the
            hottest new homes on the market by following these steps:
          </Text>
          <Button>Read More</Button>
          <Image
            source={require("../img/info-img-1.jpg")}
            style={{ ...styles.InfoImage }}
          />
          <View
            style={{ ...styles.InfoNumberContainer, alignItems: "flex-end" }}
          >
            <View
              style={{
                ...styles.InfoNumber,
                backgroundColor: "rgba(7, 173, 89,0.1)",
              }}
            >
              <Text style={{ ...styles.InfoNumberText, color: "#07ad59" }}>
                02
              </Text>
            </View>
          </View>
          <Text style={{ ...styles.InfoHeading }}>
            Free Home Evaluation For Home Sellers
          </Text>
          <Text style={{ ...styles.InfoText }}>
            Request a free home evaluation, A well-priced home will generate
            competing offers and drive up the final sale value. Our free market
            analysis takes into account currently listed and sold comparable
            homes in your area and provides you with a detailed evaluation that
            puts it all in perspective.
          </Text>
          <Button>Read More</Button>
          <Image
            source={require("../img/info-img.jpg")}
            style={{ ...styles.InfoImage }}
          />
        </View>
        <View style={{ ...styles.contactUs }}>
          <View style={{ marginBottom: 20 }}>
            <Text
              style={{
                lineHeight: 30,
                fontSize: 24,
                fontWeight: "bold",
                color: "white",
                marginBottom: 5,
              }}
            >
              Do You Have Questions?
            </Text>
            <Text
              style={{
                lineHeight: 30,
                fontSize: 20,
                fontWeight: "600",
                color: "white",
              }}
            >
              Call Our Office: (239) 992-9119
            </Text>
          </View>
          <Button
            style={{
              //backgroundColor: "white",
              height: 50,
              borderRadius: 100,
              width: "50%",
              backgroundColor: "white",
            }}
          >
            <Text>Contact Us Today</Text>
          </Button>
        </View>
      </ScrollView>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  InfoHeading: {
    fontWeight: "bold",
    fontSize: 30,
    lineHeight: 36,
    textAlign: "center",
  },
  InfoText: {
    fontSize: 18,
    lineHeight: 28,
  },
  InfoImage: {
    width: "90%",
    height: 300,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: "center",
  },
  InfoNumber: {
    width: 80,
    height: 80,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    borderRadius: 40,
    borderTopLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  InfoNumberText: {
    fontSize: 28,
    fontWeight: "700",
  },
  InfoNumberContainer: {
    margin: 20,
  },
  contactUs: {
    backgroundColor: "#09AFFF",
    height: 200,
    justifyContent: "center",
    paddingLeft: 30,
  },
  upperText: {
    color: "#172e6f",
    fontSize: 22,
    fontWeight: "bold",
  },
  LowerText: {
    fontSize: 16,
    color: "#546cb1",
  },
});
