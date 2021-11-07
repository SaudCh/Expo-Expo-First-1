import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  FlatList,
  View,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import { Input, NativeBaseProvider, Button } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import Header from "../Shared/header";
import Footer from "../Shared/Footer";
import FavouriteCard from "./FavouriteCard";

const { width, height } = Dimensions.get("window");

export default function FeatureListings(props) {
  const { navigation } = props;
  const [favCity, setFavCity] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState("");
  const [favListing, setFavListing] = useState("");

  useFocusEffect(
    React.useCallback(() => {
      getUser();
      getMovies();
    })
  );

  const getUser = async () => {
    await AsyncStorage.getItem("@user_id").then((val) => {
      if (val) {
        setUser(val);
      } else {
        setUser("0");
      }
    });
  };

  const getMovies = async () => {
    try {
      const response = await fetch(
        `https://first1.us/api/favourite.php?data=${user}`
      );
      const json = await response.json();
      setFavCity(json.data);
      setFavListing(json.fav);
      //setFavListing()
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  //console.log(12 in favListing);
  return (
    <NativeBaseProvider>
      <Header navigation={props.navigation} />
      <ScrollView>
        <View style={styles.featureCityContainer}>
          <AntDesign
            style={{ marginRight: 10 }}
            name="staro"
            size={24}
            color="#2D3954"
          />
          <Text style={styles.Heading}>Favourite Listings</Text>
        </View>

        {user !== "0" ? (
          <View>
            {/******************Feature City Section******************/}

            <View
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              {isLoading ? (
                <View style={{ ...styles.activityContainer }}>
                  <ActivityIndicator size="large" color="red" />
                </View>
              ) : (
                <FlatList
                  data={favCity}
                  keyExtractor={({ MLSNumber }, index) => MLSNumber}
                  renderItem={({ item }) => (
                    <FavouriteCard item={item} navigation={navigation} />
                  )}
                />
              )}
            </View>
          </View>
        ) : (
          <View style={{ ...styles.loginContainer }}>
            <Image
              style={styles.logo}
              source={require("../img/logo/logo-bg-null.png")}
            />
            <Text style={{ ...styles.upperText }}>Sign In to View</Text>
            <Button
              style={{ marginTop: 10 }}
              onPress={() => props.navigation.navigate("Sign In")}
            >
              Sign In
            </Button>
          </View>
        )}
        <View style={{ marginVertical: 100 }}>
          {12 in favListing ? <Text>True</Text> : <Text>False</Text>}
        </View>
        <Footer navigation={props.navigation} />
      </ScrollView>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  featureCityContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  featureCityText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  activityContainer: {
    height: 400,
    alignContent: "center",
    justifyContent: "center",
  },
  loginContainer: {
    height: height * 0.65,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    marginLeft: 10,
    width: 150,
    height: 70,
    resizeMode: "center",
  },
  Heading: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: "#2D3954",
  },
  upperText: {
    color: "#172e6f",
    fontSize: 20,
    fontWeight: "bold",
  },
  LowerText: {
    fontSize: 16,
    color: "#546cb1",
  },
});
