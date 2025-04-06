import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";

import React, { useState } from "react";
import Button from "../reusable/Button";

const CurrencyModal = ({ modalVisible, setModalVisible }) => {
  const [selectedValue, setSelectedValue] = useState("1");
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
              Main Currency
            </Text>

            <View style={{ marginVertical: 10 }}>
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
                  <Text style={{ fontWeight: 600 }}>INR</Text>
                  <Text> - Indian rupee</Text>
                </View>
                <View>
                  <Text style={{ fontWeight: 600 }}>₹</Text>
                </View>
              </Pressable>
              <Pressable
                onPress={() => setSelectedValue("2")}
                style={[
                  styles.box,
                  { borderColor: selectedValue == "2" ? "#7F3DFF" : "#ccc" },
                ]}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    source={{ uri: "https://flagcdn.com/au.svg" }}
                    style={styles.image}
                    objectFit="contain"
                  />
                  <Text style={{ fontWeight: 600 }}>AUD</Text>
                  <Text> - Australian dollar</Text>
                </View>
                <View>
                  <Text style={{ fontWeight: 600 }}>$</Text>
                </View>
              </Pressable>
              <Pressable
                onPress={() => setSelectedValue("3")}
                style={[
                  styles.box,
                  { borderColor: selectedValue == "3" ? "#7F3DFF" : "#ccc" },
                ]}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    source={{ uri: "https://flagcdn.com/us.svg" }}
                    style={styles.image}
                    objectFit="contain"
                  />
                  <Text style={{ fontWeight: 600 }}>USD</Text>
                  <Text> - US Dollar</Text>
                </View>
                <View>
                  <Text style={{ fontWeight: 600 }}>$</Text>
                </View>
              </Pressable>
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
                  <Text style={{ fontWeight: 600 }}>GBP</Text>
                  <Text> - UK Pound</Text>
                </View>
                <View>
                  <Text style={{ fontWeight: 600 }}>£</Text>
                </View>
              </Pressable>
              <Pressable
                onPress={() => setSelectedValue("5")}
                style={[
                  styles.box,
                  { borderColor: selectedValue == "5" ? "#7F3DFF" : "#ccc" },
                ]}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    source={{ uri: "https://flagcdn.com/de.svg" }}
                    style={styles.image}
                    objectFit="contain"
                  />
                  <Text style={{ fontWeight: 600 }}>EUR</Text>
                  <Text> - Euro</Text>
                </View>
                <View>
                  <Text style={{ fontWeight: 600 }}>€</Text>
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

export default CurrencyModal;

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
