import { NativeBaseProvider } from "native-base";
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  Dimensions,
  Image,
  Linking,
} from "react-native";
import {
  MaterialIcons,
  Feather,
  Entypo,
  FontAwesome,
} from "@expo/vector-icons";

import { Button } from "native-base";
import Footer from "../Shared/Footer";
import Header from "../Shared/header";
import { TouchableOpacity } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("window");
export default function Contact(props) {
  const [fullName, setFullName] = useState();
  const [num, setNum] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState();
  return (
    <NativeBaseProvider>
      <Header backButton={true} navigation={props.navigation} />
      <ScrollView>
        <View style={styles.centeredView}>
          <View style={{ margin: 40 }}>
            <Text style={{ ...styles.upperText }}>Get In Touch</Text>
            <Text style={{ ...styles.LowerText }}>
              Email us with any question or inquiries or call (239) 992-9119 We
              would be happy to answer your questions.
            </Text>

            <View style={{ marginVertical: 20 }}>
              <TextInput
                style={{ borderWidth: 1, padding: 10 }}
                placeholder="Name"
                onChangeText={setFullName}
                value={fullName}
              />
            </View>
            <View style={{ marginVertical: 20 }}>
              <TextInput
                style={{ borderWidth: 1, padding: 10 }}
                placeholder="Email"
                onChangeText={setEmail}
                value={email}
              />
            </View>
            <View style={{ marginVertical: 20 }}>
              <TextInput
                style={{ borderWidth: 1, padding: 10 }}
                placeholder="Phone Number"
                onChangeText={setNum}
                value={num}
              />
            </View>
            <View style={{ marginVertical: 20 }}>
              <TextInput
                style={{ borderWidth: 1, padding: 10 }}
                placeholder="Enter Subject"
                onChangeText={setNum}
                value={num}
              />
            </View>
            <View style={{ marginVertical: 20 }}>
              <TextInput
                style={{
                  borderWidth: 1,
                  padding: 10,
                  height: 100,
                  textAlignVertical: "top",
                }}
                placeholder="Your Message Here"
                onChangeText={setMsg}
                value={msg}
                multiline={true}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-end",
                justifyContent: "flex-end",
              }}
            >
              <Button style={{ width: 100, marginLeft: 10 }}>Send</Button>
            </View>
            <Image
              source={require("../img/contact-us.png")}
              style={{ ...styles.InfoImage }}
            />
            <TouchableOpacity
              style={{ flexDirection: "row", marginVertical: 10 }}
              onPress={() => Linking.openURL("mailto:office@first1.us")}
            >
              <Text>
                <MaterialIcons name="email" size={24} color="black" />
              </Text>
              <Text style={{ fontSize: 18, marginLeft: 10 }}>
                office@first1.us
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flexDirection: "row", marginVertical: 10 }}
              onPress={() => Linking.openURL("tel:(239) 992-9119")}
            >
              <Text>
                <Feather name="phone" size={24} color="black" />
              </Text>
              <Text style={{ fontSize: 18, marginLeft: 10 }}>
                (239) 992-9119
              </Text>
            </TouchableOpacity>
            <View style={{ flexDirection: "row", marginVertical: 10 }}>
              <Text>
                <Entypo name="location-pin" size={24} color="black" />
              </Text>
              <Text style={{ fontSize: 18, marginLeft: 10 }}>
                1495 Pine Ridge Road #1 Naples, FL 34109
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginVertical: 10,
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity>
                <FontAwesome name="facebook-square" size={30} color="black" />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome name="twitter-square" size={30} color="black" />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome name="instagram" size={30} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Footer navigation={props.navigation} />
      </ScrollView>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  upperText: {
    color: "#172e6f",
    fontSize: 22,
    fontWeight: "bold",
    //marginHorizontal: 20,
  },
  LowerText: {
    fontSize: 16,
    color: "#546cb1",
    //marginHorizontal: 20,
  },
  container: {
    minWidth: width * 0.95,
    marginVertical: 10,
    padding: 10,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    backgroundColor: "white",
    elevation: 15,
  },
  btnContainer: {
    padding: 5,
    backgroundColor: "#D5F1FF",
    marginHorizontal: 10,
  },
  InfoImage: {
    width: "90%",
    height: 300,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: "center",
    borderRadius: 10,
  },
});
