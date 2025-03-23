import React, { useRef, useState } from "react";
import { View, TextInput, StyleSheet, Alert } from "react-native";

const OTPInput = ({ length = 6, onComplete ,otp, setOtp}) => {
  // const [otp, setOtp] = useState(Array(length).fill(""));
  const inputs = useRef([]);

  const handleChange = (text, index) => {
    if (!/^\d?$/.test(text)) return; // Allow only numbers

    let newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < length - 1) {
      inputs.current[index + 1].focus();
    }

    // if (newOtp.join("").length === length) {
      // onComplete(newOtp.join(""));
    // }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  return (
    <View style={styles.container}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          ref={(el) => (inputs.current[index] = el)}
          style={styles.input}
          keyboardType="number-pad"
          maxLength={1}
          value={digit}
          onChangeText={(text) => handleChange(text, index)}
          onKeyPress={(e) => handleKeyPress(e, index)}
        />
      ))}
    </View>
  );
};

export default OTPInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8, // Adds spacing between boxes
  },
  input: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#7F3DFF",
    textAlign: "center",
    fontSize: 20,
    borderRadius: 5,
    color: "#000",
    backgroundColor: "#FFF",
  },
});
