import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";

import React, { useState } from "react";
import Button from "../reusable/Button";

const LangugeModal = ({ modalVisible, setModalVisible }) => {
  const [selectedValue, setSelectedValue] = useState("4");
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
              Language
            </Text>

            <View style={{ marginVertical: 10 }}>
            <Pressable
                onPress={() => setSelectedValue("4")}
                style={[
                  styles.box,
                  { borderColor: selectedValue == "4" ? "#7F3DFF" : "#ccc" },
                ]}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    source={{ uri: "https://flagcdn.com/gb.svg" }}
                    style={styles.image}
                    objectFit="contain"
                  />
                  <Text>English</Text>
                </View>
             
              </Pressable>
              <Pressable
                onPress={() => setSelectedValue("1")}
                style={[
                  styles.box,
                  { borderColor: selectedValue == "1" ? "#7F3DFF" : "#ccc" },
                ]}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    source={{ uri: "https://flagcdn.com/in.svg" }}
                    style={styles.image}
                    objectFit="contain"
                  />
                  <Text>Hindi</Text>
                </View>
              
              </Pressable>
           
          
            
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

export default LangugeModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    // height: "30%",
    width: "80%",
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
    padding: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ccc",
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 50,
    marginRight: 10,
    objectFit: "contain",
  },
});
