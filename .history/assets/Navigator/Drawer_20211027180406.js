import React from "react";
import { Image, StyleSheet } from "react-native";
import { Button, Text, View, NativeBaseProvider } from "native-base";

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
          <Text style={{ fontWeight: "bold" }}>Home</Text>
        </Button>
        <Button transparent onPress={() => navigate("Menu")}>
          <Text style={{ fontWeight: "bold" }}>Buy</Text>
        </Button>
        <Button transparent onPress={() => navigate("Menu")}>
          <Text style={{ fontWeight: "bold" }}>Sell</Text>
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
