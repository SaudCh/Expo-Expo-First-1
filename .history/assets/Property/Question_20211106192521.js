import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
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

export default function Question(props) {
  const { item } = props;
  const [modalVisible, setModalVisible] = useState(false);
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
  return (
    <View style={{ ...styles.card }}>
      <View style={{ ...styles.container }}>
        <Text style={{ ...styles.upperText }}>
          Ask A Question Or Schedule A Showing
        </Text>
        <Text style={{ ...styles.upperText }}>Its Free!</Text>
      </View>
      <View style={{ ...styles.container }}>
        <Button>Get More Info</Button>
      </View>
      <View style={{ ...styles.container }}>
        <Button>Schedule Showing</Button>
      </View>
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
