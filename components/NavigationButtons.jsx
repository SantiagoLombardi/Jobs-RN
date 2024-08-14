import { Text, View } from "react-native";
import { ColorBlueMid } from "../styles/constants";

const NavigationButtons = () => {
  return (
    <View
      style={{
        color: ColorBlueMid,
        height: 300,
        bottom: 0,
      }}
    >
      <Text style={{ color: "#fff" }}>Botones de navegacion</Text>
    </View>
  );
};
export default NavigationButtons;
