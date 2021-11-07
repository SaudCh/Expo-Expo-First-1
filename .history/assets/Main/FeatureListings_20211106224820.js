import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  FlatList,
  View,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Input, NativeBaseProvider, Button } from "native-base";

import { AntDesign } from "@expo/vector-icons";

import SelectedFeatureCity from "./SelectedFeatureCity";
import Header from "../Shared/header";
import Footer from "../Shared/Footer";
import FeatureCard from "./FeatureCard";

export default function FeatureListings(props) {
  const { navigation } = props;
  const [featureCity, setfeatureCity] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const getMovies = async () => {
    try {
      const response = await fetch("https://first1.us/api/properties.php");
      const json = await response.json();
      //console.log(json.data[0].other_fields_json.ActiveOpenHouseCount);
      setfeatureCity(json.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <NativeBaseProvider>
      <Header navigation={props.navigation} />
      <ScrollView>
        <View>
          {/******************Feature City Section******************/}
          <View style={styles.featureCityContainer}>
            <AntDesign
              style={{ marginRight: 10 }}
              name="staro"
              size={24}
              color="#2D3954"
            />
            <Text style={styles.Heading}>Feature Listings</Text>
          </View>
          <View
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {isLoading ? (
              <View style={{ ...styles.activityContainer }}>
                <ActivityIndicator size="large" color="red" />
              </View>
            ) : (
              <FlatList
                data={featureCity}
                keyExtractor={({ property_id }, index) => property_id}
                renderItem={({ item }) => (
                  <FeatureCard
                    navigation={navigation}
                    item={item}
                    navigation={props.navigation}
                  />
                )}
              />
            )}
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 32,
            }}
          >
            <Button style={{ width: "90%" }}>Show More Properties</Button>
          </View>
          <Footer navigation={props.navigation} />
        </View>
      </ScrollView>
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
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  featureCityContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  Heading: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: "#2D3954",
  },
  FCbutton: {
    margin: 5,
  },
  activityContainer: {
    height: 400,
    alignContent: "center",
    justifyContent: "center",
  },
});
