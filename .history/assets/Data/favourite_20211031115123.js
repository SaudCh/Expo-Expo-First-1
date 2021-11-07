import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";

const getFav = async () => {
  const [user, setUser] = useState("");
  const [data, setData] = useState("");
  await AsyncStorage.getItem("@user_id").then((val) => {
    if (val) {
      //console.log(val);
      setUser(val);
      //setTable(val);
    } else {
      setUser(0);
    }
  });
  //funtion e
  console.log(user);
  try {
    const response = await fetch(
      `https://first1.us/api/favourite.php?cond=${user}`
    );
    const json = await response.json();
    //console.log(json.data[0].other_fields_json.ActiveOpenHouseCount);
    setData(json.data);
  } catch (error) {
    console.error(error);
  }
  Img.forEach(myFunction);

  function myFunction(item, index) {
    //item = item.split(":");
    if (item != "") {
      Img[index] = {
        indx: index,
        value: item,
      };
      //console.log(Img[index]);
    }
    //console.log(Img[index]);
  }
};

export function favCities() {
  return getFav();
}
