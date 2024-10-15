import { TextInput as NativeTextInput, View } from "react-native";

const TextInput = (props) => {
  return (
    <View className={"bg-gray-200 rounded-lg p-3"}>
      <NativeTextInput {...props} className={"text-3xl text-center font-alegra-medium"} />
    </View>
  );
};

export default TextInput;
