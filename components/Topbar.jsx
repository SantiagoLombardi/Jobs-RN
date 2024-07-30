/* eslint-disable prettier/prettier */
import { View, Text } from "react-native";
const Topbar = () => {
  return (
    <View
      style={{ backgroundColor: "#232530", padding: 8 }}
      className="p-2 bg-blue-700"
    >
      <Text style={{ color: "#fff" }}>JOBS</Text>
    </View>
  );
};
export default Topbar;
