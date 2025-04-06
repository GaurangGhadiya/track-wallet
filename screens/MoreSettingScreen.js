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
import LangugeModal from "../components/Modals/LangugeModal";
import StartScreenModal from "../components/Modals/StartScreenModal";
import DefaultTransactionModal from "../components/Modals/DefaultTransactionModal";
import TransactionViewModeModal from "../components/Modals/TransactionViewModeModal";
import CurrencyFormatModal from "../components/Modals/CurrencyFormatModal";



const MoreSettingScreen = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [langugeModalVisible, setLangugeModalVisible] = useState(false)
  const [startScreenModal, setStartScreenModal] = useState(false)
  const [defaultTransactionModal, setDefaultTransactionModal] = useState(false)
  const [transactionViewMode, setTransactionViewMode] = useState(false)
  const [currencyFormat, setCurrencyFormat] = useState(false)

  const settingsOptions1 = [
    {
      id: "1",
      title: "Language",
      subTitle: "English",
      icon: "google-translate",
      onPress: () => setLangugeModalVisible(true),
    },
    {
      id: "2",
      title: "Start Screen",
      subTitle: "Home",
      icon: "cellphone-screenshot",
      onPress: () => setStartScreenModal(true),
    },
    {
      id: "3",
      title: "Default transaction type",
      subTitle: "Expense",
      icon: "typewriter",
    onPress: () => setDefaultTransactionModal(true),
    },
  ];
  const settingsOptions2 = [
    {
      id: "4",
      title: "Currency format",
      subTitle: "₹1000.00",
      icon: "bank",
      onPress: () => setCurrencyFormat(true),
    },
    {
      id: "5",
      title: "Transaction view mode",
      subTitle: "List",
      // icon: "format-list-checks",
      icon: "file-table-outline",
      onPress: () => setTransactionViewMode(true),
    },
    {
      id: "6",
      title: "Transaction time",
      subTitle: "Show transaction time",
      icon: "table-clock",
      onPress: () => toggleSwitch(),
    },
  ];


  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const renderItem = ({ item }) =>
    item.title !== "Transaction time" ? (
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
      <View>
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
          <Text style={{ color: Colors.white, fontSize: 20 }}>
            More Settings
          </Text>
        </View>
      </LinearGradient>

      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        <View>
          <Text
            style={{
              fontSize: 14,
              color: "lightgreay",
              paddingLeft: 16,
              marginTop: 15,
              marginBottom: -5,
            }}
          >
            General
          </Text>
          <FlatList
            data={settingsOptions1}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.containerq}
          />
          <View style={{ height: 1, backgroundColor: "#eee", width: "100%" }} />
          <Text
            style={{
              fontSize: 14,
              color: "lightgreay",
              paddingLeft: 16,
              marginTop: 20,
              marginBottom: -5,
            }}
          >
            Display
          </Text>
          <FlatList
            data={settingsOptions2}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.containerq}
          />
        </View>
        <Image
          source={require("../assets/images/settingbg.png")}
          style={styles.backgroundImage}
        ></Image>
      </View>
      <LangugeModal modalVisible={langugeModalVisible} setModalVisible={setLangugeModalVisible}/>
      <StartScreenModal modalVisible={startScreenModal} setModalVisible={setStartScreenModal}/>
      <DefaultTransactionModal modalVisible={defaultTransactionModal} setModalVisible={setDefaultTransactionModal}/>
      <TransactionViewModeModal modalVisible={transactionViewMode} setModalVisible={setTransactionViewMode}/>
      <CurrencyFormatModal modalVisible={currencyFormat} setModalVisible={setCurrencyFormat}/>

    </>
  );
};

export default MoreSettingScreen;

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
