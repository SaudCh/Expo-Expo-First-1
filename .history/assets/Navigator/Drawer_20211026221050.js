import React from "react";
import { StyleSheet } from "react-native";
import { Button, Text, View, Icon, NativeBaseProvider } from "native-base";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

export function DrawerContent(props) {
  const navigate = (screen) => {
    props.navigation.closeDrawer();
    props.navigation.navigate(screen);
  };

  return (
    <NativeBaseProvider>
      <View style={{ marginTop: 10 }}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={{ fontFamily: "Ballon", fontSize: 32 }}>
            Gourmet Restaurant
          </Text>
        </View>
        <View>
          <View style={{ paddingVertical: 5 }}>
            <Button transparent onPress={() => navigate("AdvanceSearch")}>
              <Icon name="grid-outline" />
              <Text style={{ fontWeight: "bold" }}>Menu</Text>
            </Button>
          </View>
          <View style={{ paddingVertical: 5 }}>
            <Button transparent onPress={() => navigate("Property")}>
              <Icon name="cart-outline" style={{ color: COLORS.primary }} />
              <Text style={{ fontWeight: "bold", color: COLORS.primary }}>
                Cart
              </Text>
            </Button>
          </View>
        </View>
      </View>
      <View
        style={{
          margin: 10,
          paddingVertical: 10,
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderColor: "#a7b2bb",
        }}
      >
        <Button transparent onPress={() => navigate("Setting")}>
          <Icon name="settings-outline" style={{ color: COLORS.primary }} />
          <Text style={{ fontWeight: "bold", color: COLORS.primary }}>
            Settings
          </Text>
        </Button>
      </View>
    </NativeBaseProvider>
  );
}
