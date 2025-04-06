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
import DatePicker from "../components/reusable/DatePicker";
import { formatDateSend, formatDateShow } from "../utils/formatDate";
import Button from "../components/reusable/Button";
import { toaster } from "../utils/toaster";
  
  const ExportDataScreen = ({navigation}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [selectedFormat, setSelectedFormat] = useState("1")
    const [notificationTimeModal, setNotificationTimeModal] = useState(false)
    const [profileData, setProfileData] = useState({});

      const handleChange = (value, name) => {

          setProfileData({ ...profileData, [name]: formatDateSend(value) });
        
      };
  
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
              Export Data
            </Text>
          </View>
        </LinearGradient>
        <View style={{ flex: 1, backgroundColor: Colors.white }}>
         <View style={{flexDirection : "row", justifyContent : "space-between", padding : 16, alignItems : "center", marginTop : 10}}>
          <Pressable onPress={() => setSelectedFormat("1")} style={{textAlign : "center", flex :1, borderWidth :1, borderRadius :8, borderColor : selectedFormat == "1" ? "#7F3DFF" : "#ccc", marginHorizontal : 8, paddingVertical : 10,}}><Text style={{textAlign : "center", fontSize : 16}}>PDF</Text></Pressable>
          <Pressable onPress={() => setSelectedFormat("2")} style={{textAlign : "center", flex :1, borderWidth :1, borderRadius :8, borderColor : selectedFormat == "2" ? "#7F3DFF" : "#ccc", marginHorizontal : 8, paddingVertical : 10,}}><Text style={{textAlign : "center", fontSize : 16}}>XLS</Text></Pressable>
          <Pressable onPress={() => setSelectedFormat("3")} style={{textAlign : "center", flex :1, borderWidth :1, borderRadius :8, borderColor : selectedFormat == "3" ? "#7F3DFF" : "#ccc", marginHorizontal : 8, paddingVertical : 10,}}><Text style={{textAlign : "center", fontSize : 16}}>CSV</Text></Pressable>
         </View>
         <View style={{padding : 16}}>
         <DatePicker
              label={"Start Date"}
              value={profileData?.start ? formatDateShow(profileData?.start) : null}
              onConfirm={handleChange}
              name={"start"}
            />
             <DatePicker
                          label={"End Date"}
                          value={profileData?.end ? formatDateShow(profileData?.end) : null}
                          onConfirm={handleChange}
                          name={"end"}
                        />
         </View>
         <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal : 16
              }}
            >
              <Button
                title={"Cancel"}
                onPress={() => navigation.goBack()}
                style={{ flex: 1, marginRight: 7 }}
              />
              <Button
                title={"Download"}
                variant={"dark"}
                onPress={() => toaster("success","Data Exported")}
                style={{ flex: 1, marginLeft: 7 }}
              />
            </View>

          <Image
            source={require("../assets/images/exportBg.png")}
            style={styles.backgroundImage}
          ></Image>
        </View>
        <NotificationTimeModal modalVisible={notificationTimeModal} setModalVisible={setNotificationTimeModal}/>
  
      </>
    );
  };
  
  export default ExportDataScreen;
  
  const styles = StyleSheet.create({
    backgroundImage: {
      position: "absolute",
      bottom: 20,
      right: 0,
      width: 300,
      height: 300,
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
  