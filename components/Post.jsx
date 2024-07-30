import { View } from "react-native-web";

const Post = () => {
  let borderColor;
  if (props.tipo === "OEmpleo") {
    borderColor = "oklch(var(--in))";
  } else if (props.tipo === "BEmpleo") {
    borderColor = "oklch(var(--s))";
  } else {
    borderColor = "#A5ABB9";
  }

  return (
    <View>
      <Text></Text>
    </View>
  );
};
export default Post;
