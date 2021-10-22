import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
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

export default function Amenities(props) {
  const { item } = props;
  var Amenities = item.Amenities;
  Amenities = Amenities.split(",");
  return (
    <View>
      {item.Amenities != "" &&
      item.Amenities != "None" &&
      item.Amenities != "Other" ? (
        <View style={{ ...styles.card2 }}>
          <Text
            style={{ fontSize: 30, textAlign: "center", fontWeight: "bold" }}
          >
            Amenities
          </Text>
          {Amenities.map((res) => (
            <View style={{ flexDirection: "row", marginVertical: 5 }}>
              <View
                style={{
                  height: 30,
                  width: 30,
                  backgroundColor: "#B9E9FF",
                  borderRadius: 15,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FontAwesome name="check" size={20} color="#0084C4" />
              </View>
              <Text style={{ fontSize: 17, marginLeft: 10, marginTop: 2 }}>
                {res}
              </Text>
            </View>
          ))}
          {/* </Text> */}
        </View>
      ) : (
        <View></View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  card2: {
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
});
