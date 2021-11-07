const getUser = async () => {
  await AsyncStorage.getItem("@user_id").then((val) => {
    if (val) {
      //console.log(val);
      setUser(val);
      //setTable(val);
    } else {
      setUser("0");
    }
  });
};

const getMovies = async () => {
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
