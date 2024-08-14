/* eslint-disable prettier/prettier */
import { View, Text } from "react-native";
import { ColorBlueMid } from "../styles/constants";
const Topbar = () => {
  return (
    <View
      style={{ backgroundColor: ColorBlueMid, padding: 20 }}
      className="p-2"
    >
      <Text style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}>JOBS</Text>
    </View>
  );
};
export default Topbar;
