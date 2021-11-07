import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
  Modal,
  Alert,
  TextInput,
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
import { Button } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Basic(props) {
  const { item } = props;
  const [modalVisible, setModalVisible] = useState(false);
  const [fullName, setFullName] = useState();
  const [num, setNum] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState(
    `I would like to get more info on this property with listing ID #${item.MLSNumber}`
  );

  const addText = () => {
    //Today date
    var d = new Date();
    var date = d.getUTCDate();
    var month = d.getUTCMonth() + 1;
    var year = d.getUTCFullYear();
    if (date <= 9) {
      date = "0" + date;
    }
    var todayDate = year + "-" + month + "-" + date;
    //todayDate = todayDate;
    //console.log(todayDate);
    let currentDate = new Date(todayDate);
    //console.log(currentDate);
    currentDate = currentDate.getTime();
    //console.log(currentDate);
    currentDate = Math.floor(currentDate / 1000);
    //console.log(currentDate);

    var mod = item.MatrixModifiedDT;
    mod = mod.substring(0, 10) + "T" + mod.substring(11, 20);
    //console.log(mod);
    mod = new Date(mod);
    mod = mod.getTime();
    mod = Math.floor(mod / 1000);
    //console.log(mod);

    var diff = Math.floor((currentDate - mod) / 3600);
    //console.log(diff);
    if (diff <= 24) {
      if (diff < 1) {
        //console.log("New Hot");
        var str = "New Hot";
      } else {
        var str = "New " + diff + " hours ago";
        //console.log("New " + diff + " hours ago");
      }
      const obj = {
        fun: 1,
        str: str,
      };
      return obj;
    } else {
      var addedDate = item.DateAdded;
      //console.log(addedDate);
      addedDate =
        addedDate.substring(0, 10) + "T" + addedDate.substring(11, 20);
      //console.log(addedDate);
      var DOM = item.DOM;
      addedDate = new Date(addedDate);
      addedDate = addedDate.getTime();
      addedDate = Math.floor(addedDate / 1000);
      //console.log(addedDate);
      //console.log(currentDate - addedDate)
      var ndiff = Math.floor((currentDate - addedDate) / 3600);
      //console.log(currentDate);
      var val = parseInt(ndiff) + parseInt(DOM);
      var str = "";
      str = val + " Days on Market";
      const obj = {
        fun: 2,
        str: str,
      };
      return obj;
    }
  };

  const priceConversion = (price) => {
    price = price.substring(0, price.length - 3);
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const addFav = async (itm) => {
    await AsyncStorage.getItem("@user_id").then((val) => {
      if (val && val != 0) {
        //setUser(val);
        addItm(itm, val);
      } else {
        props.navigation.navigate("Sign In");
      }
    });
  };

  const addItm = async (itm, user) => {
    //console.log(itm);
    try {
      const response = await fetch(
        `https://first1.us/api/addFav.php?num=${itm}&user=${user}`
      );
      const json = await response.json();
      console.log(json);
      ToastAndroid.show(json.data, ToastAndroid.SHORT);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={{ ...styles.card2 }}>
      <View
        style={{
          marginVertical: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {item.Status == "Active" ? (
          <Button style={{ backgroundColor: "#00A600", width: "45%" }}>
            {item.Status}
          </Button>
        ) : (
          <Button
            style={{ backgroundColor: "rgba(255, 87, 34,0.1)", width: "45%" }}
          >
            <Text style={{ color: "#ff5722" }}>{item.Status}</Text>
          </Button>
        )}
        {addText().fun == 2 ? (
          <Button style={{ backgroundColor: "#CEEFFF", width: "45%" }}>
            <Text style={{ color: "#006FA4" }}>{addText().str}</Text>
          </Button>
        ) : (
          <Button style={{ backgroundColor: "#FFE2C6", width: "45%" }}>
            <Text style={{ color: "#EA7500" }}>
              <FontAwesome5 name="fire" size={24} color="#EA7500" />
              {addText().str}
            </Text>
          </Button>
        )}
      </View>

      <View
        style={{
          marginBottom: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {item.PotentialShortSaleYN === "0" ? (
          <View></View>
        ) : (
          <Button
            style={{ width: "45%", backgroundColor: "rgba(255, 87, 34,0.1)" }}
          >
            <Text style={{ color: "#ff5722" }}>
              <AntDesign name="check" size={24} color="#ff5722" /> Short Sale
            </Text>
          </Button>
        )}
        {item.ForeclosedREOYN === "0" ? (
          <View></View>
        ) : (
          <Button
            style={{ width: "45%", backgroundColor: "rgba(255, 87, 34,0.1)" }}
          >
            <Text style={{ color: "#ff5722" }}>
              <FontAwesome5 name="gavel" size={24} color="#ff5722" />
              Foreclosure
            </Text>
          </Button>
        )}
      </View>

      <Text style={{ ...styles.Heading, marginBottom: 10 }}>
        {item.SubCondoName}
      </Text>
      <Text style={{ ...styles.Heading2, marginBottom: 10 }}>
        <EvilIcons
          name="location"
          size={24}
          color="#72809D"
          style={{ marginRight: 10 }}
        />
        {item.PropertyAddress}
      </Text>
      <Text style={{ ...styles.Heading2, marginBottom: 10 }}>
        <Ionicons
          name="menu"
          size={25}
          color="#72809D"
          style={{ marginRight: 10 }}
        />
        MLS #:{item.MLSNumber}
      </Text>
      <Text style={{ ...styles.Heading, marginBottom: 10 }}>
        ${priceConversion(item.CurrentPrice)}
      </Text>
      <View
        style={{
          flexDirection: "row",
          marginVertical: 5,
          paddingTop: 10,
          borderTopWidth: 1,
        }}
      >
        <TouchableOpacity
          style={{ ...styles.btnContainer }}
          onPress={() => addFav(item.MLSNumber)}
        >
          <AntDesign name="hearto" size={25} color="#0078B3" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.btnContainer }}
          onPress={() => setModalVisible(true)}
        >
          <FontAwesome5 name="envelope" size={25} color="#0078B3" />
        </TouchableOpacity>
        <TouchableOpacity style={{ ...styles.btnContainer }}>
          <FontAwesome name="share" size={25} color="#0078B3" />
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        //transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          //Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={{ margin: 40 }}>
            <Text style={{ ...styles.Heading, marginTop: 40 }}>
              Get Property Information
            </Text>
            <View style={{ marginVertical: 20 }}>
              <TextInput
                style={{ borderWidth: 1, padding: 10 }}
                placeholder="Full Name"
                onChangeText={setFullName}
                value={fullName}
              />
            </View>
            <View style={{ marginVertical: 20 }}>
              <TextInput
                style={{ borderWidth: 1, padding: 10 }}
                placeholder="Email"
                onChangeText={setFullName}
                value={fullName}
              />
            </View>
            <View style={{ marginVertical: 20 }}>
              <TextInput
                style={{ borderWidth: 1, padding: 10 }}
                placeholder="Phone Number"
                onChangeText={setFullName}
                value={fullName}
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
              <Button
                colorScheme="danger"
                style={{ width: 100 }}
                onPress={() => setModalVisible(!modalVisible)}
              >
                Cancel
              </Button>
              <Button style={{ width: 100, marginLeft: 10 }}>Send</Button>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  Heading: {
    fontSize: 25,
    color: "#2D3954",
    fontWeight: "700",
  },
  Heading2: {
    color: "#72809D",
    fontSize: 20,
    fontWeight: "700",
  },
  btnContainer: {
    padding: 5,
    backgroundColor: "#D5F1FF",
    marginHorizontal: 10,
  },
  text1: {
    textAlign: "left",
  },
  text2: {
    textAlign: "left",
  },
  text3: {
    textAlign: "right",
  },
  text4: {
    textAlign: "right",
  },
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
  box: {
    marginVertical: 10,
  },
  wheel: {
    height: 60,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 5,
    borderRadius: 30,
  },
  centeredView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
