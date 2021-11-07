import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";

const getFav = async () => {
  //const [user, setUser] = useState("");
  let user;
  await AsyncStorage.getItem("@user_id").then((val) => {
    if (val) {
      //console.log(val);
      user = val;
      //setTable(val);
    } else {
      user = 0;
    }
  });
};

const getMovies = async () => {
  //console.log(getUser());
  try {
    const response = await fetch(
      `https://first1.us/api/favourite.php?data=${user}`
    );
    const json = await response.json();
    //console.log(json.data[0].other_fields_json.ActiveOpenHouseCount);
    console.log(json.data);
  } catch (error) {
    console.error(error);
  } finally {
    //setLoading(false);
  }
};

export function favCities() {
  return getMovies();
}
