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

  useFocusEffect(
    React.useCallback(() => {
      AsyncStorage.getItem("@user_id").then((val) => {
        if (val) {
          console.log(val);
          setUser(val);
          //setTable(val);
        } else {
          //setTable("0");
        }
      });
    })
  );

  return (
    <NativeBaseProvider>
      <View>
        <Image
          style={styles.logo}
          source={require("../img/logo/logo-bg-null.png")}
        />
        <Button style={{ ...styles.button }} onPress={() => navigate("Menu")}>
          <Text style={{ fontWeight: "bold" }}>Home</Text>
        </Button>
        <Button style={{ ...styles.button }} onPress={() => navigate("Menu")}>
          <Text style={{ fontWeight: "bold" }}>Buy</Text>
        </Button>
        <Button style={{ ...styles.button }} onPress={() => navigate("Menu")}>
          <Text style={{ fontWeight: "bold" }}>Sell</Text>
        </Button>
        <Button style={{ ...styles.button }} onPress={() => navigate("Menu")}>
          <Text style={{ fontWeight: "bold" }}>MLS Search</Text>
        </Button>
        <Button style={{ ...styles.button }} onPress={() => navigate("Menu")}>
          <Text style={{ fontWeight: "bold" }}>Top Cities</Text>
        </Button>
        <Button style={{ ...styles.button }} onPress={() => navigate("Menu")}>
          <Text style={{ fontWeight: "bold" }}>About Us</Text>
        </Button>
        <Button style={{ ...styles.button }} onPress={() => navigate("Menu")}>
          <Text style={{ fontWeight: "bold" }}>Contact Us</Text>
        </Button>
        {true ? (
          <Button
            style={{ ...styles.button }}
            onPress={() => navigate("Sign In")}
          >
            <Text style={{ fontWeight: "bold" }}>Sign In</Text>
          </Button>
        ) : (
          <Button
            style={{ ...styles.button }}
            onPress={() => navigate("Sign In")}
          >
            <Text style={{ fontWeight: "bold" }}>Log Out</Text>
          </Button>
        )}
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
