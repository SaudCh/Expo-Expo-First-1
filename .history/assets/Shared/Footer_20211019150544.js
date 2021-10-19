import { Button } from "native-base";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

export default function Footer() {
  const [featureCity, setfeatureCity] = useState(null);
  const getMovies = async () => {
    try {
      const response = await fetch(
        "https://first1.us/api/cities.php?data=name"
      );
      const json = await response.json();
      //console.log(json.data);
      setfeatureCity(json.data);
      //console.log(city);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <View
      style={{
        backgroundColor: "#1d2636",
        marginTop: 50,
        paddingTop: 50,
        paddingLeft: 10,
      }}
    >
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
            style={{ width: 200, backgroundColor: "transparent", margin: 5 }}
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
      <Button style={{ width: 95, backgroundColor: "transparent", margin: 5 }}>
        Contact Us
      </Button>
      <Button style={{ width: 70, backgroundColor: "transparent", margin: 5 }}>
        Sign In
      </Button>
      <View
        style={{ height: 120, backgroundColor: "transparent", margin: 5 }}
      ></View>
    </View>
  );
}
