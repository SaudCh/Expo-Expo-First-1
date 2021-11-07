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
import Footer from "../Shared/Footer";

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
          {/******     01    **** */}
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
          <Text style={{ ...styles.upperText }}>Search Homes Right Now.</Text>
          <Text style={{ ...styles.LowerText }}>
            Use the search tool to browse the wide variety of single-family
            homes, duplexes and condominiums on the local real estate market.
          </Text>
          <Button
            style={{
              marginVertical: 10,
              justifyContent: "flex-start",
              width: 100,
              marginHorizontal: 20,
            }}
          >
            MLS Search
          </Button>
          <Image
            source={require("../img/info-img-1.jpg")}
            style={{ ...styles.InfoImage }}
          />
          {/************      02    ******* */}
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
          <Text style={{ ...styles.upperText }}>Sign Up.</Text>
          <Text style={{ ...styles.LowerText }}>
            Sign up for a search and let your dream home come to you. Members
            can also create saved searches, collect their favorites and sign up
            for instant email alerts when new homes that fit their criteria come
            on the market.
          </Text>
          <Image
            source={require("../img/buy-img-2.jpg")}
            style={{ ...styles.InfoImage }}
          />
          {/******     01    **** */}
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
                03
              </Text>
            </View>
          </View>
          <Text style={{ ...styles.upperText }}>
            Learn About The Community.
          </Text>
          <Text style={{ ...styles.LowerText }}>
            Learn About the Community and homes in the surrounding area before
            you invest. Refer to the Featured Areas section for community
            information.
          </Text>
          <Image
            source={require("../img/info-img-1.jpg")}
            style={{ ...styles.InfoImage }}
          />
          {/************      02    ******* */}
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
                04
              </Text>
            </View>
          </View>
          <Text style={{ ...styles.upperText }}>
            Use The Mortgage Calculator.
          </Text>
          <Text style={{ ...styles.LowerText }}>
            Use the mortgage calculator to figure out what your mortgage
            payments will be on the home you want.
          </Text>
          <Image
            source={require("../img/buy-img-2.jpg")}
            style={{ ...styles.InfoImage }}
          />
          {/******     01    **** */}
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
                05
              </Text>
            </View>
          </View>
          <Text style={{ ...styles.upperText }}>
            Connect To A Professional.
          </Text>
          <Text style={{ ...styles.LowerText }}>
            Contact us anytime you need to know more about the area or any
            property that interests you. When you're ready to take the next step
            toward purchasing a home, we're here to help.
          </Text>
          <Button
            style={{
              marginVertical: 10,
              justifyContent: "flex-start",
              width: 100,
              marginHorizontal: 20,
            }}
          >
            Contact Us
          </Button>
          <Image
            source={require("../img/info-img-1.jpg")}
            style={{ ...styles.InfoImage }}
          />
          {/************      02    ******* */}
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
                06
              </Text>
            </View>
          </View>
          <Text style={{ ...styles.upperText }}>Out-Of-Country Purchases.</Text>
          <Text style={{ ...styles.LowerText }}>
            We can help you buy property here, even if you're in another
            country.
          </Text>
          <Image
            source={require("../img/buy-img-2.jpg")}
            style={{ ...styles.InfoImage }}
          />
        </View>
        <Footer />
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
    marginHorizontal: 20,
  },
  LowerText: {
    fontSize: 16,
    color: "#546cb1",
    marginHorizontal: 20,
  },
});
