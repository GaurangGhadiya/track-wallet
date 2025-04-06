import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors } from "../utils/Colors";
import { useSelector } from "react-redux";
import { IMAGE_URL } from "../utils/api";

const SettingScreen = ({ navigation }) => {
  const { userData } = useSelector((state) => state.auth);

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
          <Text style={{ color: Colors.white, fontSize: 20 }}>Setting</Text>
        </View>

      
      </LinearGradient>
    </>
  );
};

export default SettingScreen;

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
  profileContainer: {
    // flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 35,
    // marginLeft : 10
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 80, // Circular Image
    borderWidth: 3,
    borderColor: "#7F3DFF",
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    color: Colors.white,
  },
});
