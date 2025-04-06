import {
  Image,
  Pressable,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "../utils/Colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import NotificationTimeModal from "../components/Modals/NotificationTimeModal";

const NotificationScreen = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [notificationTimeModal, setNotificationTimeModal] = useState(false)

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

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
          <Text style={{ color: Colors.white, fontSize: 20 }}>
            Notifications
          </Text>
        </View>
      </LinearGradient>
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        <Pressable onPress={() => setNotificationTimeModal(true)} style={{flexDirection : "row", alignItems : "center", padding : 16,marginBottom : -15}}>
                        <Icon name={"bell-ring"} size={24}  />
            <View style={{marginLeft : 16}}>
                <Text style={styles.title}>Notifications time</Text>
                <Text style={styles.subtitle}>6:00 PM</Text>
            </View>
        </Pressable>
        <View style={{height : 1, backgroundColor : "#eee", marginTop : 15}} />
        <TouchableOpacity
          style={[styles.itemContainer, { justifyContent: "space-between" }]}
          onPress={toggleSwitch}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={styles.title}>Transaction entry remainder</Text>

              <Text style={styles.subtitle}>
                Recive daily remainder to enter transactions
              </Text>
            </View>
          </View>
          <Switch
            trackColor={{ false: "grey", true: "#7F3DFF" }}
            thumbColor={isEnabled ? "#fff" : "#ccc"}
            ios_backgroundColor="#ccc"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </TouchableOpacity>
        <Image
          source={require("../assets/images/notificationBg.png")}
          style={styles.backgroundImage}
        ></Image>
      </View>
      <NotificationTimeModal modalVisible={notificationTimeModal} setModalVisible={setNotificationTimeModal}/>

    </>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    position: "absolute",
    bottom: 20,
    right: 0,
    // width: 180,
    // height: 90,
    opacity: 0.5,
  },
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
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
    // borderBottomWidth: 1,
    // borderBottomColor: '#ccc',
  },
  icon: {
    marginRight: 16,
    color: "#222",
  },
  title: {
    fontSize: 17,
    color: "#333",
  },
  subtitle: {
    fontSize: 14,
    color: "#777",
  },
});
