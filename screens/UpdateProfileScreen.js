import {
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "../utils/Colors";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/reusable/Button";
import Input from "../components/reusable/Input";
import DatePicker from "../components/reusable/DatePicker";
import Dropdown from "../components/reusable/Dropdown";
import { formatDateSend, formatDateShow } from "../utils/formatDate";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { UpdateProfileRedux } from "../redux/authSlice";
import * as ImagePicker from "expo-image-picker";
import { IMAGE_URL } from "../utils/api";
import { ConvertJsonToFormData } from "../utils/jsonToFormData";
import axios from "axios";

const UpdateProfileScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.auth);
  const [profileData, setProfileData] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImage = async () => {
    // Request media library permissions
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission Denied",
        "Sorry, we need camera roll permissions to make this work!"
      );
      return;
    }

    try {
      // Launch image library
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });

      // If the user didn't cancel the process, set the selected image
      if (!result.canceled) {
        setProfileData({ ...profileData, profileImage: result.assets[0] });
        setSelectedImage(result.assets[0]);
      }
    } catch (error) {
      console.log("Error picking image:", error?.response?.data?.message);
    }
  };
  useEffect(() => {
    setProfileData(userData);
  }, [userData]);

  const handleChange = (value, name) => {
    if (name == "date") {
      setProfileData({ ...profileData, dob: formatDateSend(value) });
    } else {
      setProfileData({ ...profileData, [name]: value });
    }
  };

  const updateProfile = () => {
    const { name, email, dob, mobile, gender, id, profileImage } = profileData;
    let body = {
      name,
      email,
      dob,
      mobile,
      gender,
      id,
      profileImage,
    };
    const formData = new FormData();
    if(name)  formData.append("name", name);
    if(email)  formData.append("email", email);
    if(dob)  formData.append("dob", dob);
    if(mobile)  formData.append("mobile", mobile);
    if(id)  formData.append("id", id);
    if(selectedImage)  formData.append("profileImage", {
      uri: selectedImage?.uri,
      name: selectedImage?.fileName, // You can use any name with appropriate extension
      type: selectedImage?.mimeType, // Adjust the type based on the selected image
    });
    dispatch(UpdateProfileRedux({ formData, navigation }));
  };

  const options = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        keyboardShouldPersistTaps="handled"
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{ flex: 1 }}>
          <LinearGradient
            colors={["#7F3DFF", "#7F3DFF"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.container}
          >
            <View style={styles.headerIcons}>
              <Icon
                name="backburger"
                color={Colors.white}
                size={24}
                onPress={() => navigation.goBack()}
              />
            </View>
          </LinearGradient>

          <View style={styles.userInfo}>
            <View style={styles.profileContainer}>
              {profileData?.profileImage != null && !selectedImage ? (
                <Image
                  source={{ uri: IMAGE_URL + profileData?.profileImage }}
                  style={styles.profileImage}
                  onError={(e) =>
                    console.log("Error loading image:", e.nativeEvent.error)
                  }
                />
              ) : selectedImage?.uri ? (
                <Image
                  source={{ uri: selectedImage?.uri }}
                  style={styles.profileImage}
                />
              ) : (
                <Image
                  source={require("../assets/images/default.png")}
                  style={styles.profileImage}
                />
              )}
              <Pressable
                style={{
                  position: "absolute",
                  height: 40,
                  width: 40,
                  borderWidth: 2,
                  borderColor: "#7F3DFF",
                  borderRadius: 50,
                  backgroundColor: "#fff",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  bottom: 15,
                  right: "23%",
                }}
                onPress={() => pickImage()}
              >
                <Icon name="camera-account" color={"#7F3DFF"} size={22} />
              </Pressable>
            </View>

            <Input
              label={"Name"}
              placeholder="Name"
              value={profileData?.name || ""}
              onChangeText={(value) => handleChange(value, "name")}
              keyboardType="default"
              maxLength={20}
              autoCapitalize="words"
            />
            <Input
              label={"Email"}
              placeholder="abc@gmail.com"
              value={profileData?.email || ""}
              onChangeText={(value) => handleChange(value, "email")}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              maxLength={40}
            />
            <Input
              label={"Mobile"}
              placeholder="Mobile Number"
              value={profileData?.mobile + "" || ""}
              onChangeText={(value) => handleChange(value, "mobile")}
              keyboardType="phone-pad"
              maxLength={10}
            />

            <DatePicker
              label={"Birth Date"}
              value={profileData?.dob ? formatDateShow(profileData?.dob) : null}
              onConfirm={handleChange}
            />
            <Dropdown
              label="Gender"
              items={options}
              value={profileData?.gender || ""}
              onValueChange={(value) => handleChange(value, "gender")}
              placeholder="Select Gender"
            />

            <View style={styles.buttonContainer}>
              <Button
                title={"Cancel"}
                onPress={() => navigation.goBack()}
                style={{ width: "48%" }}
              />
              <Button
                title={"Update"}
                onPress={updateProfile}
                style={{ width: "48%" }}
                variant={"dark"}
              />
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default UpdateProfileScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 26,
    height: "35%",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  headerIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  profileContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: -90,
    marginBottom: 20,
    position: "relative",
  },
  profileImage: {
    width: 180,
    height: 180,
    borderRadius: 100, // Circular Image
    borderWidth: 2,
    borderColor: "#7F3DFF",
    // objectFit : "contain"
  },
  userInfo: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 16,
    marginTop: -120,
    elevation: 3,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 10,
  },
});
