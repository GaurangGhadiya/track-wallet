import {
  FlatList,
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
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { Colors } from "../utils/Colors";
import { useSelector } from "react-redux";
import { IMAGE_URL } from "../utils/api";
import ThemeModal from "../components/Modals/ThemeModal";
import CurrencyModal from "../components/Modals/CurrencyModal";



const SettingScreen = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [currencyModalVisible, setCurrencyModalVisible] = useState(false);

  const settingsOptions = [
    {
      id: "1",
      title: "App lock",
      icon: "lock",
      onPress: () => toggleSwitch(),
    },
    {
      id: "2",
      title: "Main currency",
      subTitle: "₹ - Indian Rupee",
      icon: "circle-multiple",
      onPress: () => setCurrencyModalVisible(true),
    },
    {
      id: "3",
      title: "Theme",
      subTitle: "Light",
      icon: "brightness-4",
      onPress: () => setModalVisible(true),
    },
    {
      id: "4",
      title: "Notifications",
      icon: "bell",
      onPress: () => navigation.navigate("Notification"),
    },
    {
      id: "5",
      title: "Export data",
      icon: "file-export",
      onPress: () => navigation.navigate("ExportData"),
    },
    {
      id: "6",
      title: "More settings",
      icon: "dots-horizontal",
      onPress: () => navigation.navigate("MoreSetting"),
    },
  ];

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const renderItem = ({ item }) =>
    item.title !== "App lock" ? (
      <TouchableOpacity style={styles.itemContainer} onPress={item.onPress}>
        <Icon name={item.icon} size={24} style={styles.icon} />
        <View>
          <Text style={styles.title}>{item.title}</Text>

          {item?.subTitle && (
            <Text style={styles.subtitle}>{item.subTitle}</Text>
          )}
        </View>
      </TouchableOpacity>
    ) : (
      <View style={{ marginBottom: -15 }}>
        <TouchableOpacity
          style={[styles.itemContainer, { justifyContent: "space-between" }]}
          onPress={item.onPress}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon name={item.icon} size={24} style={styles.icon} />
            <View>
              <Text style={styles.title}>{item.title}</Text>

              {item?.subTitle && (
                <Text style={styles.subtitle}>{item.subTitle}</Text>
              )}
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
      </View>
    );

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
          <Text style={{ color: Colors.white, fontSize: 20 }}>Settings</Text>
        </View>
      </LinearGradient>

      <View  style={{flex: 1, backgroundColor: Colors.white}}>
        <FlatList
          data={settingsOptions}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.containerq}
        />
        <Image
          source={require("../assets/images/settingbg.png")}
          style={styles.backgroundImage}
        ></Image>
      </View>
      <ThemeModal modalVisible={modalVisible} setModalVisible={setModalVisible}/>
      <CurrencyModal modalVisible={currencyModalVisible} setModalVisible={setCurrencyModalVisible}/>
    </>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    position: "absolute",
    bottom: 20,
    right: 0,
    width: 280,
    height: 180,
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
  containerq: {
    paddingVertical: 8,
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
    fontSize: 15,
    color: "#777",
  },
});
