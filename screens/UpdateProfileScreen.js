import { Image, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../utils/Colors';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/reusable/Button';
import Input from '../components/reusable/Input';
import DatePicker from '../components/reusable/DatePicker';
import Dropdown from '../components/reusable/Dropdown';
import moment from 'moment';
import { formatDateSend, formatDateShow } from '../utils/formatDate';
import { ScrollView } from 'react-native-gesture-handler';

const UpdateProfileScreen = () => {
    const navigation = useNavigation();
    const [profileData, setProfileData] = useState({});

    const handleChange = (value, name) => {
        if (name == "date") {
            setProfileData({ ...profileData, [name]: formatDateSend(value) });
        } else {
            setProfileData({ ...profileData, [name]: value });
        }
    }

    const updateProfile = () => {
        console.log('profileData', profileData);
    }

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
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} keyboardShouldPersistTaps="handled">
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
                            <Image
                                source={require('../assets/images/default.png')}
                                style={styles.profileImage}
                            />
                            <View style={{position : 'absolute', height: 40, width : 40,borderWidth :2, borderColor : "#7F3DFF", borderRadius : 50, backgroundColor : "#fff", flexDirection : "row", alignItems : "center", justifyContent : "center", bottom : 15, right : "23%" }}>
                                <Icon name="camera-account" color={"#7F3DFF"} size={22}/>
                            </View>
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
                            value={profileData?.mobile || ""}
                            onChangeText={(value) => handleChange(value, "mobile")}
                            keyboardType="phone-pad"
                            maxLength={10}
                        />

                        <DatePicker
                            label={"Birth Date"}
                            value={profileData?.date ? formatDateShow(profileData?.date) : null}
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
                            <Button title={"Cancel"} onPress={() => navigation.goBack()} style={{ width: "48%" }} />
                            <Button title={"Update"} onPress={updateProfile} style={{ width: "48%" }} variant={"dark"} />
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
        borderBottomLeftRadius: 30
    },
    headerIcons: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10
    },
    profileContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: -90,
        marginBottom : 20,
        position : "relative"
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
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginHorizontal: 16,
        marginTop: -120,
        elevation: 3
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 10,
    }
});
