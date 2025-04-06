import { Alert, BackHandler, Platform, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import Layout from '../components/ui/Layout'
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../utils/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../components/reusable/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';


const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("1")
  const [showBalance, setShowBalance] = useState(false)


  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        Alert.alert(
          'Exit App',
          'Are you sure you want to exit the app?',
          [
            {
              text: 'Cancel',
              onPress: () => null,
              style: 'cancel',
            },
            {
              text: 'YES',
              onPress: () => BackHandler.exitApp(),
            },
          ],
          { cancelable: false }
        );
        return true; // Prevent default behavior (i.e., exiting the app)
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => {
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      };
    }, [])
  );
  
  return (
    <>

      <LinearGradient
        colors={["#7F3DFF", "#7F3DFF"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.container}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
          <Icon name={"menu"} color={Colors.white} size={24} onPress={() =>  navigation.openDrawer()} />
          <Text style={{ color: "#fff", fontSize: 16 }}>March 2025</Text>
        </View>

        <View style={styles.topPart}>
          <Text style={styles.topBalance}>Available Balance</Text>
          <Pressable onPress={() => setShowBalance(!showBalance)}>

            {!showBalance ? <Icon name={"eye-outline"} color={Colors.white} size={22} /> :
              <Icon name={"eye-off-outline"} color={Colors.white} size={20} />}
          </Pressable>
        </View>
        <View>
          {!showBalance ? <Text style={styles.price}>******</Text> : <Text style={styles.price}>₹0.00</Text>}
        </View>

        <View style={[styles.flex, { marginTop: 27 }]}>
          <View style={[styles.flex, { flex: 1, marginLeft: 10, borderRightColor: "lightgrey", borderRightWidth: 2 }]}>
            <View style={[styles.box, { backgroundColor: "#FF480F" }]}>
              <Icon name={"trending-down"} color={"#A40900"} size={20} />
            </View>
            <View>
              <Text style={styles.title}>Total Expence</Text>
              <Text style={styles.amount}>₹0.00</Text>
            </View>
          </View>

          <View style={[styles.flex, { flex: 1, marginLeft: 15 }]}>
            <View style={[styles.box, { backgroundColor: "#45DB00" }]}>
              <Icon name={"trending-up"} color={"#048D00"} size={20} />
            </View>
            <View>
              <Text style={styles.title}>Total Expence</Text>
              <Text style={styles.amount}>₹0.00</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
      <View style={styles.bottom}>
        <View style={styles.tabContainer}>
          <TouchableOpacity style={activeTab == "1" ? [styles.outerbtn, styles.activeBtn] : styles.outerbtn} onPress={() => setActiveTab("1")}>
            <Text style={activeTab == "1" ? styles.btnTextActive : styles.btnText}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={activeTab == "2" ? [styles.outerbtn, styles.activeBtn] : styles.outerbtn} onPress={() => setActiveTab("2")}>
            <Text style={activeTab == "2" ? styles.btnTextActive : styles.btnText}>Expence</Text>
          </TouchableOpacity>
          <TouchableOpacity style={activeTab == "3" ? [styles.outerbtn, styles.activeBtn] : styles.outerbtn} onPress={() => setActiveTab("3")}>
            <Text style={activeTab == "3" ? styles.btnTextActive : styles.btnText}>Income</Text>

          </TouchableOpacity>
        </View>

      </View>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    // flex : 1,
    padding: 16,
    paddingTop: 26,
    height: "35%",
  },
  flex: {
    flexDirection: "row",
    alignItems: "center"
  },
  title: {
    color: "lightgrey",
    fontSize: 14
  },
  amount: {
    color: Colors.white,
    fontSize: 14
  },
  box: {
    borderRadius: 8,
    height: 45,
    width: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10
  },













  bottom: {
    flex: 1,
    padding: 16,
    marginTop: -20,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25

  },
  tabContainer: {
    backgroundColor: "#EEE5FF",
    borderRadius: 16,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    // justifyContent : "space-around"
  },
  outerbtn: {
    borderRadius: 8,
    flex: 1,
    textAlign: "center",
    paddingVertical: 10
  },
  btnText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: 500
  },
  btnTextActive: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: 500,
    color: "#7F3DFF"
  },
  activeBtn: {
    borderRadius: 10,
    backgroundColor: Colors.white
  },
  topPart: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "11%"
  },
  topBalance: {
    fontSize: 20,
    color: "lightgray",
    marginRight: 7
  },
  price: {
    fontSize: 20,
    color: Colors.white,
    textAlign: "center"
  }
})