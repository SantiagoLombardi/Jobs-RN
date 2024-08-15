import { Text, View } from "react-native";
import Post from "./Post";

const Feed = () => {
  return (
    <View>
      {/* <Text>Feed</Text> */}
      <Post
        photoUrl="https://media.0221.com.ar/adjuntos/357/migration/0221/032019/1553553111207.jpg"
        nombre="Geronimo Benavides"
        profesion="Creador de contenido"
        desc="descripcion"
      />
    </View>
  );
};
export default Feed;
