import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors } from "../utils/Colors";

const AboutUsScreen = ({ navigation }) => {
  const redirect = () => {
    Linking.openURL("https://www.3dotinfotech.in");
  };

  const handlePress = () => {
    const email = "gaurangghadiya99@gmail.com";
    const subject = "Regarding to Track Wallet app";
    const body = "Hello,";
    const url = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    Linking.openURL(url);
  };
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
          <Text style={{ color: "#fff", fontSize: 20, fontWeight: 500 }}>
            About Us
          </Text>
        </View>
      </LinearGradient>
      <ScrollView style={styles.safe}>
        <View style={styles.bottom1}>
          <View style={styles.logo}>
            <Image
              source={require("../assets/images/default.png")}
              style={{ height: 90, width: 90 }}
            />
          </View>
          <Text style={styles.name}>Track Wallet</Text>
          <Text style={styles.version}>Version : 1.1.0</Text>
          <Text style={styles.title}>Developed by</Text>
          <Text style={styles.dot}>3Dot Infotech</Text>
          <Text style={styles.link} onPress={redirect}>
            https://www.3dotinfotech.in
          </Text>
        </View>

        <View style={styles.bottom1}>
          <Text style={styles.data}>Hi,</Text>
          <Text style={styles.data}>
            Thank you for downloading and using TrackWallet!​
          </Text>
          <Text style={styles.data}>
            We are passionate about personal finance and have developed
            TrackWallet to assist individuals in India and around the world in
            managing their finances effectively.
          </Text>
          <Text style={styles.data}>
            Our goal is to enhance financial well-being by providing a
            comprehensive money management and expense tracking tool.​
          </Text>
          <Text style={[styles.data, { marginBottom: 0 }]}>
            TrackWallet enables you to monitor multiple accounts, track
            expenses, and manage budgets seamlessly, helping you make informed
            financial decisions and achieve your financial goals. ​
          </Text>
        </View>

        <View style={styles.bottom1}>
          <Text style={styles.data}>
            For any queries, issues or improvements related to this App, please
            contact us through the below email.
          </Text>
          <View style={styles.last}>
            <Text style={styles.emailT}>Email : </Text>
            <Text style={styles.email} onPress={handlePress}>
              gaurangghadiya99@gmail.com
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default AboutUsScreen;

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
  safe: {
    backgroundColor: "white",
    // minHeight: "100%",
    paddingHorizontal: 20,
  },
  bottom1: {
    borderColor: "#e9e9eb",
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 15,
    padding: 20,
    // alignItems: 'center',
  },
  logo: {
    justifyContent: "center",
    flexDirection: "row",
  },
  name: {
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
    marginTop: 10,
    textAlign: "center",
  },
  version: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    marginTop: 5,
    color: "black",
  },
  title: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
    marginTop: 15,
    fontWeight: "500",
  },
  dot: {
    fontSize: 18,
    color: "black",
    fontWeight: "700",
    textAlign: "center",
    marginTop: 5,
  },
  link: {
    color: "#7F3DFF",
    textDecorationLine: "underline",
    fontSize: 16,
    textAlign: "center",
    marginTop: 5,
  },
  data: {
    fontSize: 14,
    color: "black",
    marginBottom: 10,
  },
  last: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
  },
  emailT: {
    fontSize: 14,
    color: "black",
    // fontWeight : "700",
  },
  email: {
    color: "#7F3DFF",
    fontSize: 14,
  },
});
