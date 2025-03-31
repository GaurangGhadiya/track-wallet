import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../utils/Colors';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/reusable/Button';
import Input from '../components/reusable/Input';

const UpdateProfileScreen = () => {
    const navigation = useNavigation();

    return (
        <>
            {/* 🟣 Gradient Header */}
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

            {/* 🟣 Profile Section */}
            
            <View style={styles.userInfo}>
            <View style={styles.profileContainer}>
                <Image
                    source={require('../assets/images/user.jpg')}
                    style={styles.profileImage}
                />
                <View style={{ marginVertical: 16 }}>
                    <Button onPress={() => { }} title={"Change Photo"} />
                </View>
            </View>
                <Input
                    label={"Email"}
                    placeholder="abc@gmail.com"
                    value={""}
                    onChangeText={() => { }}
                    keyboardType="phone-pad"
                    maxLength={10}
                />
                <Input
                    label={"Mobile"}
                    disabled
                    placeholder="Mobile Number"
                    value={""}
                    onChangeText={() => { }}
                    keyboardType="phone-pad"
                    maxLength={10}
                />
                <Input
                    label={"Email"}
                    placeholder="Mobile Number"
                    value={""}
                    onChangeText={() => { }}
                    keyboardType="phone-pad"
                    maxLength={10}
                />
                <Input
                    label={"Email"}
                    placeholder="Mobile Number"
                    value={""}
                    onChangeText={() => { }}
                    keyboardType="phone-pad"
                    maxLength={10}
                />

                <View flexDirection="row" justifyContent='space-between' marginTop={10} marginBottom={10}>
                    <Button title={"Cancel"} onPress={() => navigation.goBack()} style={{width : "48%"}}/>
                    <Button title={"Update"} onPress={() => {}} style={{width : "48%"}} variant={"dark"}/>
                </View>
            </View>
        </>
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
        // flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: -90
    },
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 100, // Circular Image
        borderWidth: 3,
        borderColor: "#7F3DFF"
    },
    profileName: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10
    },
    userInfo: {
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginHorizontal: 16,
        marginTop: -120,
        elevation : 5
    },
    outerinfo: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 8
    }
});
