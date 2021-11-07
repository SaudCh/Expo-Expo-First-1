import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import Header from "../Shared/header";
import { AntDesign, Feather, EvilIcons } from "@expo/vector-icons";
import { Button, NativeBaseProvider } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Signin(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const Login = () => {
    fetchInfo();
  };

  const fetchInfo = async () => {
    try {
      const response = await fetch(
        `https://first1.us/api/login.php?email=${email}&password=${pass}`
      );

      const json = await response.json();
      //console.log(json.data[0].city_id);
      //console.log(json);
      //console.log(selectedCity.city_id);

      if (json.data) {
        setError("");
        await AsyncStorage.setItem("@user_id", json.data.user_id);
        props.navigation.navigate("Main");
      } else {
        setError("Invalid Email or Password");
      }
    } catch (error) {
      console.error(error);
    } finally {
      //setLoading(true);
    }
  };

  return (
    <NativeBaseProvider>
      <Header backButton={true} navigation={props.navigation} />
      <Image
        source={require("../img/florida-2.jpg")}
        style={{ ...styles.SigninIamge }}
      />
      <View style={{ ...styles.MainContainer }}>
        {error ? (
          <Text style={{ color: "red", marginBottom: 10 }}>{error}</Text>
        ) : (
          <View></View>
        )}
        <View style={{ ...styles.container }}>
          <EvilIcons name="envelope" size={24} color="black" />
          <TextInput
            value={email}
            style={styles.input}
            onChangeText={setEmail}
            placeholder="Email"
          />
        </View>
        <View style={{ ...styles.container }}>
          <EvilIcons name="unlock" size={24} color="black" />
          <TextInput
            value={pass}
            style={styles.input}
            onChangeText={setPass}
            placeholder="Password"
          />
        </View>
        <View style={{ ...styles.container, borderWidth: 0 }}>
          <Text>Forget Password?</Text>
        </View>
        <View
          style={{
            ...styles.container,
            borderWidth: 0,
            justifyContent: "center",
          }}
        >
          <Button onPress={() => Login()}>Sign In</Button>
        </View>
      </View>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  SigninIamge: { width: "100%", height: 300 },
  container: {
    marginBottom: 20,
    flexDirection: "row",
    borderWidth: 1,
    alignItems: "center",
    height: 40,
    borderRadius: 5,
  },
  MainContainer: {
    padding: 20,
  },
  input: {
    width: "100%",
    marginLeft: 10,
  },
});
