/* eslint-disable prettier/prettier */
import { View, Text, Image } from "react-native";
import { ColorBlueMid } from "../styles/constants";

const image = {
  uri: '../assets/Logo.png',
  width: 55,
  height: 25,
};

const Topbar = () => {
  return (
    <View
      style={{ backgroundColor: ColorBlueMid, padding: 20 }}
      className="p-2"
    >
      <Image source={image} />
      {/* <Text style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}>JOBS</Text> */}
    </View>
  );
};
export default Topbar;
