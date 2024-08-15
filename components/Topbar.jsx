import { View, Image } from "react-native";
import { ColorBlueMid } from "../styles/constants";

const Topbar = () => {
  return (
    <View
      style={{ backgroundColor: ColorBlueMid, padding: 20 }}
      className="p-2"
    >
      <Image
        source={require("../assets/images/Logo.png")}
        style={{ height: 20, width: 40 }}
      />
      {/* <Text style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}>JOBS</Text> */}
    </View>
  );
};
export default Topbar;
