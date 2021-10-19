import React, { useEffect, useState } from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import { Input } from "native-base";

export default function Search(props) {
  return (
    <View>
      <Input
        isFullWidth="true"
        mx="10"
        placeholder="Input"
        w={{
          base: "75%",
          md: "25%",
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({});
