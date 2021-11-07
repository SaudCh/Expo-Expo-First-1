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
  //console.log();
  //console.log(JSON.parse(item.other_fields_json).VirtualTourURL2);
  var link = JSON.parse(item.other_fields_json).VirtualTourURL;
  if (link == "") {
    link = JSON.parse(item.other_fields_json).VirtualTourURL2;
  }
  //console.log(item.DefaultPic);
  return (
    <View>
      {link ? (
        <View style={{ ...styles.card }}>
          <Text style={{ ...styles.Heading }}>Virtual Tour</Text>
          <Text style={{}}>{item.VirtualTour}</Text>
          <View style={styles.container}>
            <ImageBackground
              source={{ uri: `http://first1.us/${item.DefaultPic}` }}
              resizeMode="cover"
              style={styles.image}
            >
              <AntDesign name="playcircleo" size={80} color="white" />
            </ImageBackground>
          </View>
        </View>
      ) : (
        <View></View>
      )}
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
  image: {
    flex: 1,
    justifyContent: "center",
    height: 400,
  },
  container: {
    marginBottom: 25,
  },
});
