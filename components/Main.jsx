import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Topbar from "./Topbar";
import Feed from "./Feed";
import NavigationButtons from "./NavigationButtons";

export default function Main() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ paddingBottom: insets.bottom, paddingTop: insets.top }}>
      <Topbar />
      <Feed />
      {/* <Text style={styles.text}>Texto muy interesante</Text> */}
      {/* <NavigationButtons /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#fff",
  },
});
