import React from "react";
import { View, Text, Image } from "react-native";
import Header from "../Shared/header";

export default function Property(props) {
  const { route } = props;
  const { itemId } = route.params;

  return (
    <View>
      <Header />
      <View>
        <Image
          source={{ uri: `https://first1.us/${item.DefaultPic}` }}
          style={{ width: "100%", height: 200 }}
        />
      </View>
    </View>
  );
}
