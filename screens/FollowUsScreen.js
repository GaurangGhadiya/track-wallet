import { Linking, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Colors } from '../utils/Colors'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SocialCard from '../components/reusable/SocialCard';
import instagramLogo from '../assets/images/instagram.png'; // Ensure correct path
import linkedinLogo from '../assets/images/linkedin.png'; // Ensure correct path

const FollowUsScreen = ({navigation}) => {
  return (
    <>
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
              <Text style={{color : "#fff", fontSize: 20, fontWeight : 500 }}>Follow Us</Text>
            </View>
          </LinearGradient>

        <View style={{padding : 16, paddingTop : 10, flexDirection : "row", justifyContent : "space-between", alignItems : "center"}}>
        <SocialCard
        logo={instagramLogo}
        name="Instagram"
        onPress={() => Linking.openURL("https://www.instagram.com/gaurang_ghadiya_007")}
        description="Get inspired"
      />
      <SocialCard
        logo={linkedinLogo}
        name="LinkedIn"
        onPress={() => Linking.openURL("https://www.linkedin.com/in/gaurang007")}
        description="Work with us"
      />
        </View>
    </>
  )
}

export default FollowUsScreen

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 26,
    height: "10%",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  headerIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
})