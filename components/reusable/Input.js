import React from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";

const Input = ({ label, placeholder, value, onChangeText, secureTextEntry=false, keyboardType, maxLength=50}) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        placeholderTextColor="#aaa"
        maxLength={maxLength}
        cursorColor={"#7F3DFF"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    width: "100%",
  },
  label: {
    fontSize: 14,
    color: "#333",
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#000",
    backgroundColor: "#fff",
  },
});

export default Input;
