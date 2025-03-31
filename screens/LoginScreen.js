import {
  Alert,
  Image,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'
import React, { useState } from 'react'
import Input from '../components/reusable/Input'
import Button from '../components/reusable/Button'
import { LinearGradient } from 'expo-linear-gradient'
import OTPInput from '../components/reusable/OTPInput'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux'
import { login, sendOTPRedux, verifyOTPRedux } from '../redux/authSlice'
import { apiService } from '../utils/api'
import Toast from 'react-native-toast-message'
import { toaster } from '../utils/toaster'

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const [mobileNumber, setMobileNumber] = useState('')
  const [otp, setOtp] = useState(Array(6).fill(""))
  const [otpSend, setOtpSend] = useState(false)

  const sendOTP = async () => {
    const extra = () => setOtpSend(true); // ✅ Define the extra function

    dispatch(sendOTPRedux({mobile : mobileNumber, extra})); // ✅ Pass extra inside an object
};


  const verifyOTP = async() => {
   dispatch(verifyOTPRedux({mobile :mobileNumber,otp: otp.join("")}))

    // if (otp?.join("").length != 6) {
    //   Alert.alert("Invalid OTP", "Please enter valid OTP")
    // } else {

    //   Alert.alert(`Login Successfull`)
    //   dispatch(login()); // Dispatch Redux login action
    // }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} keyboardShouldPersistTaps="handled">
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{ flex: 1 }}>
          <View style={[styles.container]}>
            <View style={{ height: 420, width: "auto", marginTop: "10%", flex: 1 }}>
              <Image
                source={require('../assets/images/login.png')}
                style={{ height: "100%", width: "100%" }}
              />
            </View>
            <LinearGradient colors={["#7F3DFF", "#EEE5FF"]} start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }} style={styles.gradient}>
              <Text style={styles.title}>{otpSend ? "OTP Verification" : 'Enter your mobile number'}</Text>
              <Text style={styles.subTitle}>
                {otpSend ? (
                  <>
                    Enter the OTP sent to <Text style={{ fontWeight: "bold" }}>{mobileNumber}</Text>
                  </>
                ) : (
                  "We will send you a One Time Password on this mobile number"
                )}
              </Text>
              {otpSend ?
                <OTPInput length={6} onComplete={(otp) => setOtp(otp)} otp={otp} setOtp={setOtp} />

                : <Input
                  placeholder="Mobile Number"
                  value={mobileNumber}
                  onChangeText={(number) => setMobileNumber(number)}
                  keyboardType="phone-pad"
                  maxLength={10}
                />}
              <View style={{ marginTop: otpSend ? 30 : 10 }}>
                <Button title={otpSend ? "Verify OTP" : "Get OTP"} variant={"dark"} onPress={() => { otpSend ? verifyOTP() : sendOTP() }} />
              </View>
            </LinearGradient>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    padding: 16,
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    // minHeight: 500,
  },
  title: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 26,
    marginBottom: 15,
    marginTop: "10%",
  },
  subTitle: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 40,
  },
})
