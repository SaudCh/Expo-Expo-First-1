import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ToastAndroid,
  Picker,
  TextInput,
  Modal,
  Platform,
} from "react-native";
import {
  Entypo,
  Ionicons,
  FontAwesome,
  AntDesign,
  FontAwesome5,
} from "@expo/vector-icons";
import { Button } from "native-base";
const { width, height } = Dimensions.get("window");
import AsyncStorage from "@react-native-async-storage/async-storage";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function FeatureCard(props) {
  const { item, navigation } = props;

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
    schedule();
  };
  const schedule = async () => {
    await AsyncStorage.getItem("@user_id").then((val) => {
      if (val && val != 0) {
        //setUser(val);
        scheduleVisit(val);
        setModal1Visible(true);
      } else {
        props.navigation.navigate("Sign In");
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
      //console.log(json);
      ToastAndroid.show(json.data, ToastAndroid.SHORT);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={{ marginHorizontal: 10 }}>
      <View style={{ ...styles.container }}>
        <Image
          source={{ uri: `https://first1.us/${item.DefaultPic}` }}
          style={{
            width: "100%",
            height: 200,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        />
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 22,
              lineHeight: 30,
              marginVertical: 5,
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
            <Ionicons name="bed" size={24} color="black" /> {item.BedsTotal}{" "}
            Beds
          </Text>
          <Text style={{ marginLeft: 83 }}>
            <FontAwesome name="bathtub" size={24} color="black" />{" "}
            {bedAndGar(item.BathsTotal)} Bath
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
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
        <Text style={{ marginTop: 10, marginBottom: 5, fontSize: 15 }}>
          {JSON.parse(item.other_fields_json).ListOfficeName}
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
            onPress={() => fetchInfoModal()}
          >
            <FontAwesome5 name="envelope" size={25} color="#0078B3" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.btnContainer }}
            onPress={() => scheduleModal()}
          >
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
      <Modal
        animationType="slide"
        //transparent={true}
        visible={modal1Visible}
        onRequestClose={() => {
          //Alert.alert("Modal has been closed.");
          setModal1Visible(!modal1Visible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={{ margin: 20 }}>
            <Text style={{ ...styles.Heading, marginTop: 40 }}>
              Get Property Information
            </Text>
            <View style={{ marginVertical: 10 }}>
              <TextInput
                style={{ borderWidth: 1, padding: 10 }}
                placeholder="Full Name"
                onChangeText={setFullName}
                value={fullName}
              />
            </View>
            <View style={{ marginVertical: 10 }}>
              <TextInput
                style={{ borderWidth: 1, padding: 10 }}
                placeholder="Email"
                onChangeText={setEmail}
                value={email}
              />
            </View>
            <View style={{ marginVertical: 10 }}>
              <TextInput
                style={{ borderWidth: 1, padding: 10 }}
                placeholder="Phone Number"
                onChangeText={setNum}
                value={num}
              />
            </View>
            <View style={{ marginVertical: 10, borderWidth: 1 }}>
              <Picker
                selectedValue={time}
                style={{ height: 50 }}
                onValueChange={(itemValue, itemIndex) => setTime(itemValue)}
              >
                <Picker.Item label="ASAP" value="ASAP" />
                <Picker.Item label="In 1 Month" value="1 Month" />
                <Picker.Item label="Within 3 Month" value="3 Month" />
                <Picker.Item label="Within 6 Month" value="6 Month" />
              </Picker>
            </View>
            <View
              style={{
                marginVertical: 10,
                borderWidth: 1,
                padding: 10,
                paddingVertical: 15,
                //height: 50,
              }}
            >
              <Text onPress={() => showMode("date")}>{text}</Text>
            </View>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={"date"}
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}
            <View style={{ marginVertical: 10, borderWidth: 1 }}>
              <Picker
                selectedValue={time2}
                style={{ height: 50 }}
                onValueChange={(itemValue, itemIndex) => setTime2(itemValue)}
              >
                <Picker.Item label="9:00 AM" value="9:00 AM" />
                <Picker.Item label="9:30 AM" value="9:30 AM" />
                <Picker.Item label="10:00 AM" value="10:00 AM" />
                <Picker.Item label="10:30 AM" value="10:30 AM" />
                <Picker.Item label="11:00 AM" value="11:00 AM" />
                <Picker.Item label="11:30 AM" value="11:30 AM" />
                <Picker.Item label="12:00 PM" value="12:00 PM" />
                <Picker.Item label="12:30 PM" value="12:30 PM" />
                <Picker.Item label="1:00 PM" value="1:00 PM" />
                <Picker.Item label="1:30 PM" value="1:30 PM" />
                <Picker.Item label="2:00 PM" value="2:00 PM" />
                <Picker.Item label="2:30 PM" value="2:30 PM" />
                <Picker.Item label="3:00 PM" value="3:00 PM" />
                <Picker.Item label="3:30 PM" value="3:30 PM" />
                <Picker.Item label="4:00 PM" value="4:00 PM" />
                <Picker.Item label="4:30 PM" value="4:30 PM" />
                <Picker.Item label="5:00 PM" value="5:00 PM" />
                <Picker.Item label="5:30 PM" value="5:30 PM" />
                <Picker.Item label="6:00 PM" value="6:00 PM" />
                <Picker.Item label="6:30 PM" value="6:30 PM" />
                <Picker.Item label="7:00 PM" value="7:00 PM" />
              </Picker>
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
                onPress={() => setModal1Visible(!modal1Visible)}
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
