import React, { useState } from "react";
import {
  View,
  Text,
  Picker,
  StyleSheet,
  TextInput,
  Modal,
  Platform,
} from "react-native";
import { Button } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function Question(props) {
  const { item } = props;
  const [modalVisible, setModalVisible] = useState(false);
  const [modal1Visible, setModal1Visible] = useState(false);
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState();
  const [text, setText] = useState("Set Date");
  const [time, setTime] = useState("");

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
  return (
    <View>
      <View style={{ ...styles.card }}>
        <View style={{ ...styles.container }}>
          <Text style={{ ...styles.upperText }}>
            Ask A Question Or Schedule A Showing
          </Text>
          <Text style={{ ...styles.upperText }}>Its Free!</Text>
        </View>
        <View style={{ ...styles.container }}>
          <Button onPress={() => fetchInfoModal()}>Get More Info</Button>
        </View>
        <View style={{ ...styles.container }}>
          <Button onPress={() => scheduleModal()}>Schedule Showing</Button>
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
            <View>
              <Button onPress={() => showMode("date")}>{text}</Button>
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
                //selectedValue={selectedValue}
                style={{ height: 50, width: 150 }}
                // onValueChange={(itemValue, itemIndex) =>
                //   setSelectedValue(itemValue)
                // }
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
  card: {
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
  container: {
    marginBottom: 10,
  },
  Heading: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: "#2D3954",
    borderBottomColor: "#f5f6fa",
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 10,
  },
  upperText: {
    color: "#172e6f",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  lowerText: {
    fontSize: 16,
    color: "#546cb1",
  },
  box: {
    marginBottom: 10,
  },
  paraGraph: {
    fontSize: 17,
    lineHeight: 25,
  },
});
