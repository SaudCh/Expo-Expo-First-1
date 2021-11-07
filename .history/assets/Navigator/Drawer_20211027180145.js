import React from "react";
import { Image, StyleSheet } from "react-native";
import { Button, Text, View, Icon, NativeBaseProvider } from "native-base";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

export function DrawerContent(props) {
  const navigate = (screen) => {
    props.navigation.closeDrawer();
    props.navigation.navigate(screen);
  };

  return (
    <NativeBaseProvider>
      <View>
        <Image
          style={styles.logo}
          source={require("../img/logo/logo-bg-null.png")}
        />
        <Button transparent onPress={() => navigate("Menu")}>
          <Icon
            type="FontAwesome"
            ios="ios-menu"
            android="md-menu"
            style={{ fontSize: 20, color: "red" }}
          />

          <Text style={{ fontWeight: "bold" }}>Menu</Text>
        </Button>
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
});
