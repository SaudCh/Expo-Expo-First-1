import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Modal,
  Platform,
  Picker,
} from "react-native";
import {
  Entypo,
  Ionicons,
  FontAwesome,
  AntDesign,
  FontAwesome5,
} from "@expo/vector-icons";
import { Button } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DateTimePicker from "@react-native-community/datetimepicker";
const { width, height } = Dimensions.get("window");

export default function FavouriteCard(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modal1Visible, setModal1Visible] = useState(false);
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState();
  const [text, setText] = useState("Set Date");
  const [time, setTime] = useState("");
  const [time2, setTime2] = useState("");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    let TempDate = new Date(currentDate);
    let fdate =
      TempDate.getDate() +
      "/" +
      (TempDate.getMonth() + 1) +
      "/" +
      TempDate.getFullYear();
    setText(fdate);
    //console.log(fdate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const [fullName, setFullName] = useState();
  const [num, setNum] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState(
    `I would like to get more info on this property with listing ID #${item.MLSNumber}`
  );
  //const year = new Date().getFullYear();
  const fetchInfoModal = () => {
    setModalVisible(true);
    fetchInfo();
  };

  const fetchInfo = async () => {
    await AsyncStorage.getItem("@user_id").then((val) => {
      if (val && val != 0) {
        //setUser(val);
        getUser(val);
      } else {
        //props.navigation.navigate("Sign In");
      }
    });
  };

  const getUser = async (user) => {
    try {
      const response = await fetch(
        `https://first1.us/api/user.php?user=${user}`
      );

      const json = await response.json();
      //console.log(json.data[0]);
      setFullName(json.data[0].fullname);
      setEmail(json.data[0].email);
      setNum(json.data[0].phone_number);
    } catch (error) {
      console.error(error);
    }
  };

  const scheduleModal = () => {
    setModal1Visible(true);
    schedule();
  };
  const schedule = async () => {
    await AsyncStorage.getItem("@user_id").then((val) => {
      if (val && val != 0) {
        //setUser(val);
        scheduleVisit(val);
      } else {
        //props.navigation.navigate("Sign In");
      }
    });
  };
  const scheduleVisit = async (user) => {
    try {
      const response = await fetch(
        `https://first1.us/api/user.php?user=${user}`
      );

      const json = await response.json();
      //console.log(json.data[0]);
      setFullName(json.data[0].fullname);
      setEmail(json.data[0].email);
      setNum(json.data[0].phone_number);
    } catch (error) {
      console.error(error);
    }
  };

  const priceConversion = (price) => {
    price = price.substring(0, price.length - 3);
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const totalArea = (area = 0) => {
    area = area ? area : 0;
    return area.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const bedAndGar = (val) => {
    val = val.substring(0, val.length - 3);
    val = val ? val : 0;
    return val;
  };

  const { item, navigation } = props;
  return (
    <View style={{ ...styles.container }}>
      <Image
        source={{ uri: `https://first1.us/${item.DefaultPic}` }}
        style={{
          width: "100%",
          height: 200,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        }}
      />
      <TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            lineHeight: 30,
            fontWeight: "bold",
            color: "#09AFFF",
          }}
        >
          {item.SubCondoName}
        </Text>
      </TouchableOpacity>
      <Text style={{ color: "#535353", fontSize: 14, lineHeight: 24 }}>
        <Entypo name="location-pin" size={24} color="black" />{" "}
        {item.PropertyAddress}
      </Text>
      <Text
        style={{
          color: "#0076AE",
          fontSize: 22,
          lineHeight: 30,
          marginBottom: 20,
        }}
      >
        ${priceConversion(item.CurrentPrice)}
      </Text>
      <View
        style={{
          flexDirection: "row",
          marginBottom: 5,
        }}
      >
        <Text>
          <Ionicons name="bed" size={24} color="black" /> {item.BedsTotal} Beds
        </Text>
        <Text style={{ marginLeft: 83 }}>
          <FontAwesome name="bathtub" size={24} color="black" />{" "}
          {bedAndGar(item.BathsTotal)} Bath
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginBottom: 5,
        }}
      >
        <Text>
          <FontAwesome name="car" size={24} color="black" />{" "}
          {bedAndGar(item.GarageSpaces)} Garage
        </Text>
        <Text style={{ marginLeft: 65 }}>
          <Entypo name="map" size={24} color="black" />{" "}
          {totalArea(item.TotalArea)} sqft
        </Text>
      </View>
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
          onPress={() => props.removeFav(item.MLSNumber)}
        >
          <AntDesign name="heart" size={24} color="#0078B3" />
        </TouchableOpacity>
        <TouchableOpacity style={{ ...styles.btnContainer }}>
          <FontAwesome5 name="envelope" size={25} color="#0078B3" />
        </TouchableOpacity>
        <TouchableOpacity style={{ ...styles.btnContainer }}>
          <Ionicons name="ios-alarm-outline" size={26} color="#0078B3" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.btnContainer }}
          onPress={() =>
            navigation.navigate("Property", {
              item: item,
            })
          }
        >
          <FontAwesome name="eye" size={25} color="#0078B3" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
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
});
