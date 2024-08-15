import { Button, Image, Text, View } from "react-native";
import { ColorBlueBG, ColorBlueMid } from "../styles/constants";

const Post = (props) => {
  let borderColor;
  if (props.tipo === "OEmpleo") {
    borderColor = "oklch(var(--in))";
  } else if (props.tipo === "BEmpleo") {
    borderColor = "oklch(var(--s))";
  } else {
    borderColor = "#A5ABB9";
  }

  const image = {
    uri: props.photoUrl,
    width: 76,
    height: 76,
  };

  return (
    <View
      className={`flex flex-col rounded-md border border-[#A5ABB9] border-[${borderColor}] w-[100]  bg-base-100  my-5 p-3`}
      style={{
        borderRadius: 12,
        borderColor: "#A5ABB9",
        borderStyle: "solid",
        backgroundColor: ColorBlueMid,
        width: 300,
        marginVertical: 20,
        padding: 12,
        marginHorizontal: 12,
      }}
    >
      <View
        className={`publicador flex border-b border-[#A5ABB9] pb-1 mb-3`}
        style={{
          flexDirection: "row",
          borderBottomWidth: 1,
          borderColor: "#A5ABB9",
          paddingBottom: 8,
          marginBottom: 8,
        }}
      >
        <View style={{ marginRight: 8 }}>
          <View className="avatar">
            <View className="w-12 rounded-lg">
              <Image source={image} style={{ borderRadius: 10 }} />
            </View>
          </View>
        </View>
        <View>
          <Text
            className="text-xl font-semibold w-min text-white"
            style={{
              fontSize: 20,
              lineHeight: 28,
              width: "min-content",
              color: "#FFF",
              fontWeight: "bold",
            }}
          >
            {props.nombre ? props.nombre : "NOMBRE"}
          </Text>
          <Text
            style={{
              fontSize: 12,
              lineHeight: 16,
              width: "min-content",
              color: "#FFF",
              marginTop: 4,
            }}
          >
            {props.profesion ? props.profesion : "PROFESION"}
          </Text>
        </View>
        {/* AGREGAR BAGDE INFORMATIVO, SIENDO UN SUBCOMPONETE LINEAS 42 Y 43 DEL PROYECTO WEB */}
      </View>
      <View className="desc">
        <Text
          style={{
            fontSize: 12,
            width: "min-content",
            color: "#FFF",
            fontWeight: "300",
          }}
        >
          {props.desc ? props.desc : "DESCRIPCION"}
        </Text>
      </View>
      <View>
        {/* cambiar por un pressable personalizado */}
        {/* <Button text="Ver mas" /> */}
      </View>
    </View>
  );
};
export default Post;
