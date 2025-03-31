import React from "react";
import { View, Text ,Box} from "react-native";
import Toast, { BaseToast } from "react-native-toast-message";
import Icon from 'react-native-vector-icons/MaterialIcons';

const toastConfig = {
  success: ({ text1, text2, props }) => (
    <View
      style={{
        backgroundColor: "#4CAF50",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        width: "80%",
        alignSelf: "center",
        flexDirection : "row",
      }}
    >
                <Icon name="verified" color={"#fff"} size={30}/>

      <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16, marginLeft : 10  }}>{text1}</Text>
    </View>
  ),
  error: ({ text1, text2, props }) => (
    <View
      style={{
        backgroundColor: "#FF5252",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        width: "90%",
        alignSelf: "center",
        flexDirection : "row",

      }}
    >
        <Icon name="error-outline" color={"#fff"} size={30}/>

      <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16, marginLeft : 10 }}>{text1}</Text>
    </View>
  ),
};



 const toaster = (type ,message1, message2) => {
    console.log(type ,message1, message2)
    return Toast.show({
        type: type,
        text1: message1,
        text2:  message2,
      });
}

export { toastConfig,toaster };
