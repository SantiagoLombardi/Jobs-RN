import { Button, Image, Text, View } from "react-native";

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
    width: 100,
    height: 100,
  };

  return (
    <View
      className={`flex flex-col rounded-md border border-[#A5ABB9] border-[${borderColor}] w-[100]  bg-base-100  my-5 p-3`}
    >
      <View className={`publicador flex border-b border-[#A5ABB9] pb-1 mb-3`}>
        <View className="mr-2">
          <View className="avatar">
            <View className="w-12 rounded-lg">
              <Image source={image} />
            </View>
          </View>
        </View>
        <View>
          <Text className="text-xl font-semibold w-min">{props.nombre}</Text>
          <Text>{props.profesion}</Text>
        </View>
        {/* AGREGAR BAGDE INFORMATIVO, SIENDO UN SUBCOMPONETE LINEAS 42 Y 43 DEL PROYECTO WEB */}
      </View>
      <View className="desc">
        <Text>{props.desc}</Text>
      </View>
      <View>
        //! cambiar por un pressable personalizado
        <Button text="Ver mas" />
      </View>
    </View>
  );
};
export default Post;
