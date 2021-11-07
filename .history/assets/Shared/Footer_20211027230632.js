import { Button, Input } from "native-base";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getCities } from "../Data/cities";

export default function Footer(props) {
  const [user, setUser] = useState("");
  useFocusEffect(
    React.useCallback(() => {
      AsyncStorage.getItem("@user_id").then((val) => {
        if (val) {
          //console.log(val);
          setUser(val);
          //setTable(val);
        } else {
          //setTable("0");
        }
      });
    })
  );
  const [featureCity, setfeatureCity] = useState(getCities());
  return (
    <View
      style={{
        backgroundColor: "#1d2636",
        marginTop: 50,
        paddingTop: 50,
        paddingLeft: 10,
      }}
    >
      <Image
        source={require("../img/footer-img-1.png")}
        style={{ height: 70, marginBottom: 10 }}
      />
      <Text
        style={{
          color: "white",
          letterSpacing: 1,
          fontWeight: "700",
          fontSize: 21,
          lineHeight: 30,
          marginBottom: 10,
        }}
      >
        Sign Up for News Letter
      </Text>
      <View style={{ flexDirection: "row", marginVertical: 20 }}>
        <Input
          color="white"
          style={{ backgroundColor: "white" }}
          placeholder="Email Address"
          w={{
            base: "75%",
            md: "25%",
          }}
        />
        <Button>Subscribe</Button>
      </View>
      <Text
        style={{
          color: "#afaeae",
          marginBottom: 10,
          fontSize: 14,
          fontWeight: "600",
        }}
      >
        We'll never spam or sell your details. You unsubscribe whenever you'd
        like.
      </Text>
      <Text
        style={{
          color: "white",
          marginBottom: 10,
          fontWeight: "700",
          fontSize: 21,
        }}
      >
        TOP Cities
      </Text>
      <FlatList
        data={featureCity}
        keyExtractor={({ city_id }, index) => city_id}
        renderItem={({ item }) => (
          <Button
            style={{
              width: 120,
              justifyContent: "flex-start",
              backgroundColor: "transparent",
              margin: 5,
            }}
          >
            {item.name}
          </Button>
        )}
      />
      <Text
        style={{
          color: "white",
          marginBottom: 10,
          fontWeight: "700",
          fontSize: 21,
        }}
      >
        USEFULL LINKS
      </Text>
      <Button
        style={{
          width: 65,
          backgroundColor: "transparent",
          margin: 5,
        }}
      >
        Home
      </Button>
      <Button style={{ width: 100, backgroundColor: "transparent", margin: 5 }}>
        MLS Search
      </Button>
      <Button style={{ width: 85, backgroundColor: "transparent", margin: 5 }}>
        About Us
      </Button>
      <Button
        onPress={() => props.navigation.navigate("Contact")}
        style={{ width: 95, backgroundColor: "transparent", margin: 5 }}
      >
        Contact Us
      </Button>
      {true ? (
        <Button
          style={{ width: 70, backgroundColor: "transparent", margin: 5 }}
        >
          Sign In
        </Button>
      ) : (
        <Button
          style={{ width: 70, backgroundColor: "transparent", margin: 5 }}
        >
          Logout
        </Button>
      )}
      <View
        style={{ height: 120, backgroundColor: "transparent", margin: 5 }}
      ></View>
    </View>
  );
}
