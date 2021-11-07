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
          source={{ src: "../img/logo/logo.png" }}
          style={{ width: "100%", height: 50 }}
        />
      </View>
    </NativeBaseProvider>
  );
}
