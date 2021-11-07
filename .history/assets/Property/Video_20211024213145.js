import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import {
  Entypo,
  Ionicons,
  FontAwesome,
  AntDesign,
  FontAwesome5,
  EvilIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export default function Videos(props) {
  const { item } = props;
  console.log(JSON.parse(item.other_fields_json).VirtualTourURL);
  console.log(JSON.parse(item.other_fields_json).VirtualTourURL2);
  return (
    <View style={{ ...styles.card }}>
      <Text style={{ ...styles.Heading }}>Virtual Tour</Text>
      <Text style={{}}>{item.VirtualTour}</Text>
      <View style={styles.container}>
        <ImageBackground
          source={{ uri: "https://reactjs.org/logo-og.png" }}
          resizeMode="cover"
          style={styles.image}
        ></ImageBackground>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginVertical: 20,
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  Heading: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: "#2D3954",
    borderBottomColor: "#f5f6fa",
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 10,
  },
});
