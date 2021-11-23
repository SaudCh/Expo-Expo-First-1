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
              About Us - Who We Are?
            </Text>
          </View>
        </ImageBackground>
        <View style={{ padding: 10 }}>
          <Text style={{ ...styles.upperText }}>About MVP Realty </Text>
          <Text style={{ ...styles.LowerText }}>
            With 700+ Realtors and over 20 branch real estate offices, MVP
            Realty proudly serves home buyers and sellers throughout all of
            Florida. Through our work in these renowned locales, we have earned
            a high-quality reputation as a dedicated real estate team with a
            proven track record of success and award-winning business practices.
            Our service mentality is highlighted in our responsiveness,
            accessibility and attention to detail. When some agents were
            struggling, we were thriving, and here are just a few highlights we
            are particularly proud of:
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
          <Text style={{ ...styles.upperText }}>KNOWLEDGE</Text>
          <Text style={{ ...styles.LowerText }}>
            As a dedicated real estate agents, we are qualified to guide you in
            buying or selling a home. We believe in using our skills in finance,
            contracts, negotiation and marketing to your best advantage.
          </Text>
          <Image
            source={require("../img/about1.png")}
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
          <Text style={{ ...styles.upperText }}>INTEGRITY</Text>
          <Text style={{ ...styles.LowerText }}>
            Buying or selling a home is one of the most important transactions
            in the lives of many people. Because of that, it is important that
            you work with someone you trust and feel is a market expert with
            integrity. People trust our agents with their most-valuable asset.
            It's a responsibility we take very seriously. We know that your
            success is our success.
          </Text>
          <Image
            source={require("../img/about2.png")}
            style={{ ...styles.InfoImage }}
          />
          {/******     03    **** */}
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
          <Text style={{ ...styles.upperText }}>LOCAL EXPERTISE</Text>
          <Text style={{ ...styles.LowerText }}>
            We offer local market knowledge that's tailored to meet your needs.
            We know the neighborhoods, schools, market conditions, zoning
            regulations and the economy throughout each Florida city. We will do
            the leg work, keeping you up-to-date with new listings and
            conditions as they impact the market. We will make the process as
            pleasurable and stress-free an experience for you as possible.
          </Text>
          <Image
            source={require("../img/about3.jpg")}
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
          <Text style={{ ...styles.upperText }}>SUCCESS</Text>
          <Text style={{ ...styles.LowerText }}>
            We don't measure our success through awards received or
            achievements, but through the satisfaction of our clients. Whether
            you are looking to buy or sell your home, we will provide sound and
            trustworthy advice to help you achieve your real estate goals.
          </Text>
          <Image
            source={require("../img/about4.jpg")}
            style={{ ...styles.InfoImage }}
          />
          {/******     01    **** */}

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
            onPress={() => props.navigation.navigate("Contact")}
          >
            Contact Us
          </Button>
        </View>
        <Footer navigation={props.navigation} />
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
    borderRadius: 10,
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
