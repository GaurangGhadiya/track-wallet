import {
  Dimensions,
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import Button from "../reusable/Button";

const timeSlot = [
  "12:00 AM",
  "12:15 AM",
  "12:30 AM",
  "12:45 AM",
  "01:00 AM",
  "01:15 AM",
  "01:30 AM",
  "01:45 AM",
  "02:00 AM",
  "02:15 AM",
  "02:30 AM",
  "02:45 AM",
  "03:00 AM",
  "03:15 AM",
  "03:30 AM",
  "03:45 AM",
  "04:00 AM",
  "04:15 AM",
  "04:30 AM",
  "04:45 AM",
  "05:00 AM",
  "05:15 AM",
  "05:30 AM",
  "05:45 AM",
  "06:00 AM",
  "06:15 AM",
  "06:30 AM",
  "06:45 AM",
  "07:00 AM",
  "07:15 AM",
  "07:30 AM",
  "07:45 AM",
  "08:00 AM",
  "08:15 AM",
  "08:30 AM",
  "08:45 AM",
  "09:00 AM",
  "09:15 AM",
  "09:30 AM",
  "09:45 AM",
  "10:00 AM",
  "10:15 AM",
  "10:30 AM",
  "10:45 AM",
  "11:00 AM",
  "11:15 AM",
  "11:30 AM",
  "11:45 AM",
  "12:00 PM",
  "12:15 PM",
  "12:30 PM",
  "12:45 PM",
  "01:00 PM",
  "01:15 PM",
  "01:30 PM",
  "01:45 PM",
  "02:00 PM",
  "02:15 PM",
  "02:30 PM",
  "02:45 PM",
  "03:00 PM",
  "03:15 PM",
  "03:30 PM",
  "03:45 PM",
  "04:00 PM",
  "04:15 PM",
  "04:30 PM",
  "04:45 PM",
  "05:00 PM",
  "05:15 PM",
  "05:30 PM",
  "05:45 PM",
  "06:00 PM",
  "06:15 PM",
  "06:30 PM",
  "06:45 PM",
  "07:00 PM",
  "07:15 PM",
  "07:30 PM",
  "07:45 PM",
  "08:00 PM",
  "08:15 PM",
  "08:30 PM",
  "08:45 PM",
  "09:00 PM",
  "09:15 PM",
  "09:30 PM",
  "09:45 PM",
  "10:00 PM",
  "10:15 PM",
  "10:30 PM",
  "10:45 PM",
  "11:00 PM",
  "11:15 PM",
  "11:30 PM",
  "11:45 PM",
];

const screenWidth = Dimensions.get("window").width;
const numColumns = 3;
const itemSpacing = 10;
// const itemWidth = (screenWidth - itemSpacing * (numColumns + 1)) / numColumns;

const NotificationTimeModal = ({ modalVisible, setModalVisible }) => {
  const [selectedValue, setSelectedValue] = useState("06:00 PM");
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={[
            styles.centeredView,
            { backgroundColor: "rgba(0, 0, 0, 0.5)" },
          ]}
        >
          <View style={styles.modalView}>
            <Text style={{ fontSize: 20, textAlign: "center" }}>
              Notifications Time
            </Text>

            <View style={{ marginVertical: 10, maxHeight: "80%" }}>
              <FlatList
                data={timeSlot}
                numColumns={numColumns}
                columnWrapperStyle={styles.row}
                contentContainerStyle={styles.container}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                  <Pressable
                    onPress={() => setSelectedValue(item)}
                    style={[
                      styles.box,
                      {
                        borderColor: selectedValue == item ? "#7F3DFF" : "#ccc"
                      },
                    ]}
                  >
                    <Text>{item}</Text>
                  </Pressable>
                )}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Button
                title={"Cancel"}
                onPress={() => setModalVisible(!modalVisible)}
                style={{ flex: 1, marginRight: 7 }}
              />
              <Button
                title={"Submit"}
                variant={"dark"}
                onPress={() => setModalVisible(!modalVisible)}
                style={{ flex: 1, marginLeft: 7 }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default NotificationTimeModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    // height: "30%",
    maxHeight: "60%",
    width: "85%",
    backgroundColor: "white",
    borderRadius: 20,
    // borderTopRightRadius: 20,
    // padding: 16,
    // alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    padding: 16,
  },
  box: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ccc",
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width : "fit-content",
  },
  container: {
    paddingHorizontal: itemSpacing,
  },
  row: {
    justifyContent: "space-between",
    marginBottom: itemSpacing,
  },
});
