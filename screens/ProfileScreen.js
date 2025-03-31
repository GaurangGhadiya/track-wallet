import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../utils/Colors';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
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
          <Icon 
            name="account-edit" 
            color={Colors.white} 
            size={24} 
            onPress={() => navigation.navigate("UpdateProfile")} 
          />
        </View>
      </LinearGradient>

      {/* 🟣 Profile Section */}
      <View style={styles.profileContainer}>
        <Image 
          source={require('../assets/images/user.jpg')} 
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Gaurang Ghadiya</Text>
      </View>
      <View style={styles.userInfo}>
        <View style={styles.outerinfo}>
          <Text style={[styles.profileName, {fontSize : 16, marginTop : 0, width : "30%"}]}>Email</Text>
          <Text style={[styles.profileName, {fontSize : 16, marginTop : 0, fontWeight : 500}]}>gaurangghadiya99@gmail.com</Text>
        </View>
        <View style={styles.outerinfo}>
          <Text style={[styles.profileName, {fontSize : 16, marginTop : 0, width : "30%"}]}>Mobile No.</Text>
          <Text style={[styles.profileName, {fontSize : 16, marginTop : 0, fontWeight : 500}]}>9016193206</Text>
        </View>
        <View style={styles.outerinfo}>
          <Text style={[styles.profileName, {fontSize : 16, marginTop : 0, width : "30%"}]}>Gender</Text>
          <Text style={[styles.profileName, {fontSize : 16, marginTop : 0, fontWeight : 500}]}>Male</Text>
        </View>
        <View style={styles.outerinfo}>
          <Text style={[styles.profileName, {fontSize : 16, marginTop : 0, width : "30%"}]}>Birth Date</Text>
          <Text style={[styles.profileName, {fontSize : 16, marginTop : 0, fontWeight : 500}]}>21-07-2000</Text>
        </View>
      </View>
    </>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 26,
    height: "23%",
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
    marginTop: -90,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100, // Circular Image
    borderWidth: 3,
    borderColor: "#7F3DFF",
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10
  },
  userInfo :{
    backgroundColor : '#ddd',
    borderRadius : 8,
    paddingHorizontal : 16,
    paddingVertical:8,
    marginHorizontal : 16,
    marginTop : 16,
    elevation : 3
  },
  outerinfo : {
    flexDirection : "row",
    alignItems : "center",
    justifyContent : "space-between",
    paddingVertical :8
   }
});
