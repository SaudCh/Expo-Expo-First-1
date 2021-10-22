import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function WalkScore(props) {
  const { wal, score } = props;
  return (
    <View style={{ ...styles.card2 }}>
      <Text style={{ fontSize: 30, textAlign: "center", fontWeight: "bold" }}>
        Walk Score
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <View style={{ ...styles.wheel }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {wal.walkscore}
          </Text>
        </View>
        <View>
          <Text style={{ fontSize: 18, color: "#2D3954", fontWeight: "bold" }}>
            Walk Scores
          </Text>
          <Text style={{ fontSize: 15, color: "#72809D" }}>
            {wal.description}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <View style={{ ...styles.wheel }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#03a9f4" }}>
            {score.score}
          </Text>
        </View>

        <View>
          <Text style={{ fontSize: 18, color: "#2D3954", fontWeight: "bold" }}>
            Bikeable Scores
          </Text>
          <Text style={{ fontSize: 15, color: "#72809D" }}>
            {score.description}
          </Text>
        </View>
      </View>
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

  wheel: {
    height: 60,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 5,
    borderRadius: 30,
    borderColor: "#03a9f4",
    marginRight: 10,
  },
});
