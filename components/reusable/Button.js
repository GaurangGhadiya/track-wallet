import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ title, onPress ,variant, style}) => {
  return (
    <TouchableOpacity style={[styles.button,style, variant == "dark" ? styles.darkBg : styles.lightBg]} onPress={onPress} activeOpacity={0.7}>
      <Text style={[styles.buttonText, variant == "dark" ? styles.darkText : styles.lightText]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  darkBg : {
    backgroundColor : "#7F3DFF",
  },
  lightBg : {
    backgroundColor : "#EEE5FF",
  },
  darkText : {
    color : "white",
  },
  lightText : {
    color : "#7F3DFF",
  },
});

export default Button;
