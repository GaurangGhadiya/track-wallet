import React from "react";
import { View, StyleSheet, Text, Image, Button, Linking, Pressable, Share } from "react-native";

import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "../../utils/Colors";
import { DrawerActions } from '@react-navigation/native';


// import IconM from 'react-native-vector-icons/MaterialIcons';

const DrawerList = [
  { icon: "home-outline", label: "Home", navigateTo: "Home" },
  { icon: "cog-outline", label: "Settings", navigateTo: "Setting" },
  { icon: "share-variant-outline", label: "Share", navigateTo: "" },
  { icon: "information-outline", label: "About Us", navigateTo: "AboutUs" },
  { icon: "shield-check-outline", label: "Privacy Policy", navigateTo: "" },
  { icon: "comment-account-outline", label: "Follow Us", navigateTo: "FollowUs" },
  { icon: "star-outline", label: "Rate & Reviews", navigateTo: "" },
  { icon: "send-outline", label: "Send Feedback", navigateTo: "" },
];
const DrawerLayout = ({ icon, label, navigateTo,navigation  }) => {

  return (
    <DrawerItem
      icon={({ color, size }) => <Icon name={icon} color={color} size={size} />}
      label={label}
      onPress={() => {
        if (label == "Share") {
          handleShare();
        } else if (label == "Privacy Policy") {
          Linking.openURL(
            "https://www.termsfeed.com/live/cb1baf40-9914-4c94-a0ab-c3f46bf8c640"
          );
        } else if (label == "Rate & Reviews") {
          Linking.openURL(
            "https://play.google.com/store/apps/details?id=com.emi_calculator_fianance"
          );
        }else if (label == "Send Feedback") {
          Linking.openURL(`mailto:${"gaurangghadiya99@gmail.com"}`);
        } else {
          navigation.navigate(navigateTo);
          navigation.dispatch(DrawerActions.closeDrawer());
        }
      }}
    />
  );
};
const handleShare = async () => {
  try {
    const result = await Share.share({
      message: "https://play.google.com/store/apps/details?id=com.emi_calculator_fianance",
      url: "https://play.google.com/store/apps/details?id=com.emi_calculator_fianance",
      title: "EMI Calculator",
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        console.log(`Shared with activity type: ${result.activityType}`);
      } else {
        console.log('Shared');
      }
    } else if (result.action === Share.dismissedAction) {
      console.log('Dismissed');
    }
  } catch (error) {
    console.error(error.message);
  }

};

function DrawerData(props) {
  return (
    <>
      <LinearGradient
        colors={["#7F3DFF", "#7F3DFF"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.container}
      >
        <View style={styles.userInfoSection}>
          <Pressable onPress={() => props.navigation.navigate("Profile")} style={{ flexDirection: "row", marginTop: 15 }}>
            <Image
              source={require("../../assets/images/default.png")}
              style={{ marginTop: 5, height: 50, width: 50, borderRadius: 4 }}
            />
            <View
              style={{
                marginLeft: 10,
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Text style={styles.title}>EMI Calculator</Text>
            </View>
          </Pressable>
        </View>
      </LinearGradient>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerSection}>
        {DrawerList.map((el, i) => (
            <DrawerLayout
              key={i}
              icon={el.icon}
              label={el.label}
              navigateTo={el.navigateTo}
              navigation={props.navigation} // Pass navigation prop here
            />
          ))}       
           </View>
      </DrawerContentScrollView>

      <View style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="atom" color={color} size={size} />
          )}
          label="Version - 1.1.0"
        />
      </View>
    </>
  );
}
export default DrawerData;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 26,
    height: "15%",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 10,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    color: Colors.white,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 13,
    lineHeight: 14,
    // color: '#6e6e6e',
    width: "100%",
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    // marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: -35,
    borderBottomWidth: 0,
    borderBottomColor: "#dedede",
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#dedede",
    borderTopWidth: 1,
    borderBottomColor: "#dedede",
    borderBottomWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
