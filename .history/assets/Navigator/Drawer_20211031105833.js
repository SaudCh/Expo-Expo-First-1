import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import { Button, Text, View, NativeBaseProvider } from "native-base";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function DrawerContent(props) {
  const [user, setUser] = useState("");
  const navigate = (screen) => {
    props.navigation.closeDrawer();
    props.navigation.navigate(screen);
  };
  const navigateHome = () => {
    props.navigation.closeDrawer();
    props.navigation.navigate("Main", { screen: "Home" });
  };

  const logOut = async () => {
    try {
      await AsyncStorage.setItem("@user_id", "0");
      props.navigation.navigate("Main");
    } catch (error) {
      console.error(error);
    } finally {
      //setLoading(true);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      AsyncStorage.getItem("@user_id").then((val) => {
        if (val) {
          //console.log(val);
          setUser(val);
          //setTable(val);
        } else {
          //setTable("0");
          setUser("0");
        }
      });
    })
  );

  return (
    <NativeBaseProvider>
      <View style={{ height: "100%" }}>
        <Image
          style={styles.logo}
          source={require("../img/logo/logo-bg-null.png")}
        />
        <Button style={{ ...styles.button }} onPress={() => navigateHome()}>
          <Text style={{ fontWeight: "bold" }}>Home</Text>
        </Button>
        <Button style={{ ...styles.button }} onPress={() => navigate("Buy")}>
          <Text style={{ fontWeight: "bold" }}>Buy</Text>
        </Button>
        <Button style={{ ...styles.button }} onPress={() => navigate("Sell")}>
          <Text style={{ fontWeight: "bold" }}>Sell</Text>
        </Button>
        <Button
          style={{ ...styles.button }}
          onPress={() =>
            props.navigation.navigate("Main", { screen: "Advance Search" })
          }
        >
          <Text style={{ fontWeight: "bold" }}>MLS Search</Text>
        </Button>
        <Button
          style={{ ...styles.button }}
          onPress={() =>
            props.navigation.navigate("Main", {
              screen: "Favourite",
            })
          }
        >
          <Text style={{ fontWeight: "bold" }}>Top Cities</Text>
        </Button>
        <Button style={{ ...styles.button }} onPress={() => navigate("About")}>
          <Text style={{ fontWeight: "bold" }}>About Us</Text>
        </Button>
        {user !== "0" ? (
          <View>
            <Button
              style={{ ...styles.button }}
              onPress={() => navigate("Contact")}
            >
              <Text style={{ fontWeight: "bold" }}>Contact Us</Text>
            </Button>
            <Button
              style={{ ...styles.button }}
              onPress={() =>
                props.navigation.navigate("Main", {
                  screen: "Favourite",
                })
              }
            >
              <Text style={{ fontWeight: "bold" }}>Favourite City</Text>
            </Button>
            <Button
              style={{ ...styles.button }}
              onPress={() => navigate("Contact")}
            >
              <Text style={{ fontWeight: "bold" }}>Saved Searches</Text>
            </Button>
          </View>
        ) : (
          <Button
            style={{ ...styles.button }}
            onPress={() => navigate("Contact")}
          >
            <Text style={{ fontWeight: "bold" }}>Contact Us</Text>
          </Button>
        )}
        <View style={{ position: "absolute", bottom: 10, width: "100%" }}>
          {user !== "0" ? (
            <Button style={{ ...styles.button }} onPress={() => logOut()}>
              <Text style={{ fontWeight: "bold", color: "red" }}>Log Out</Text>
            </Button>
          ) : (
            <Button
              style={{ ...styles.button }}
              onPress={() => navigate("Sign In")}
            >
              <Text style={{ fontWeight: "bold" }}>Sign In</Text>
            </Button>
          )}
        </View>
      </View>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  logo: {
    marginLeft: 10,
    width: 150,
    height: 70,
    resizeMode: "center",
    alignSelf: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: "transparent",
    justifyContent: "flex-start",
    borderTopWidth: 1,
    marginTop: 10,
  },
});
