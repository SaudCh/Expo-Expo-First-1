import React from "react";
import { View, Text } from "react-native";

export default function Equipment(props) {
  const { item } = props;
  return (
    <View>
      {item.Equipment != "" &&
      item.Equipment != "None" &&
      item.Equipment != "Other" ? (
        <View style={{ ...styles.card2 }}>
          <Text
            style={{ fontSize: 30, textAlign: "center", fontWeight: "bold" }}
          >
            Equipment
          </Text>
          {Equipment.map((res) => (
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
        </View>
      ) : (
        <View></View>
      )}
    </View>
  );
}
