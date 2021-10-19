import React, { useEffect, useState } from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import { Input, NativeBaseProvider, Button } from "native-base";

export default function Search(props) {
  return (
    <View>
      <Input
        mx="3"
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
