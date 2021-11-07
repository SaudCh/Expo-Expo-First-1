import AsyncStorage from "@react-native-async-storage/async-storage";

const getUser = async () => {
  var user;
  await AsyncStorage.getItem("@user_id").then((val) => {
    if (val) {
      //console.log(val);
      user = val;
      //setTable(val);
    } else {
      user = 0;
    }
  });
  console.log(user);
  return user;
};

var user = getUser();
console.log(user);

const getMovies = async () => {
  //console.log(getUser());
  try {
    const response = await fetch(
      `https://first1.us/api/favourite.php?data=${getUser()}`
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
