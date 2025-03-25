import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, FlatList, TouchableOpacity, TouchableHighlight } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Input from '../components/reusable/Input';

const rendorColor = ({ item, index }) => {
  return (<View style={{ marginLeft: index == 0 ? 14 : 0, marginRight: index == 17 ? 14 : 0 }}>
    <FlatList
      data={["red", "green", "blue"]}
      renderItem={({ item, index }) => <View style={{ backgroundColor: item, height: 32, width: 32, borderRadius: 50, margin: 7 }}></View>}
      keyExtractor={(item) => item + index}
    // numColumns={18}
    // horizontal
    />
  </View>)
}
const rendorIcon = ({ item, index }) => {
  return(<View style={{ marginBottom: 5 }}>
    {/* Title */}
    <Text style={{ fontSize: 13,color:"#666",fontWeight:600, marginBottom: 5 }}>
      {item.title}
    </Text>
    
    {/* Items in multiple columns */}
    <FlatList
      data={item.data}
      renderItem={({ item }) => (
        <TouchableOpacity style={{ margin: 13.5}}>
          <Icon name={item} color={"#444"} size={25} />
        </TouchableOpacity>
      )}
      keyExtractor={(item, index) => `${item}-${index}`}
      numColumns={7} // Adjust number of columns as needed
    />
  </View>)
}

const iconNames = {
  Finance :[
    "account-balance-wallet", "wallet", "savings", "credit-card", "payment", 
    "schedule-send", "attach-money", "account-balance-wallet", "view-carousel", 
    "account-balance", "receipt-long", "savings", "security", "monetization-on", 
    "attach-money", "euro", "edit", "currency-rupee", "currency-bitcoin", 
    "contactless", "card-giftcard", "edit", "diamond", "show-chart", 
    "bar-chart", "trending-up", "candlestick-chart", "pie-chart", "percent", 
    "autorenew", "point-of-sale", "calculate", "receipt", "atm", "payments", 
    "handshake", "circle", "brightness-1"
  ],
  Shopping : [
    "shopping-cart", "shopping-bag", "shopping-basket", "store", "local-offer",
    "checkroom", "dry-cleaning", "checkroom", "directions-walk", "diamond",
    "brush", "smartphone", "laptop", "ondemand-video", "headphones",
    "camera-alt", "watch", "local-shipping", "card-giftcard", "public"
  ],
  Home :  [
    "home", "house", "account-balance", "weekend", "hotel",
    "kitchen", "lightbulb", "emoji-objects", "phone", "wifi",
    "email", "bolt", "power", "water-drop", "ac-unit",
    "whatshot", "thermostat", "toys", "cleaning-services", "door-front",
    "vpn-key", "shopping-cart", "construction", "local-florist", "eco",
    "content-cut", "format-paint"
  ]
}

const formattedData = Object.entries(iconNames).map(([key, values]) => ({
  title: key,
  data: values,
}));
const NewSubCategoryScreen = ({ modalVisible, setModalVisible }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          {/* {modalVisible && <StatusBar backgroundColor="rgba(0, 0, 0, 0.5)" barStyle="light-content" />} */}

          <View style={[styles.centeredView, { backgroundColor: "rgba(0, 0, 0, 0.5)" }]}>
            <View style={styles.modalView}>
              <View style={{ alignItems: "center", flexDirection: "row", justifyContent: "flex-start", paddingHorizontal: 16, paddingVertical: 15 }}>
                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>

                  <Icon name={"close"} color={"#222222"} size={26} />
                </TouchableOpacity>

                <Text style={{ fontSize: 22, marginLeft: 80 }}>New subcategory</Text>
              </View>
              <View style={{ flexDirection: "row-reverse", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 16 }}>
                <View style={{ flex: 1, marginTop: 0 }}>
                  <Input
                    placeholder="Name"
                    value={""}
                    onChangeText={() => ""}

                  />
                </View>
                <TouchableOpacity style={{ marginRight: 10, marginTop: -17, backgroundColor: "red", flexDirection: "row", justifyContent: "center", alignItems: "center", height: 45, width: 45, borderRadius: 50 }}>
                  <Icon name={"store"} color={"#fff"} size={20} />
                </TouchableOpacity>
              </View>

              <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
                renderItem={(item) => rendorColor(item)}
                keyExtractor={(item) => `${item}-${Math.random()}`}
                // numColumns={18}
                horizontal
                showsHorizontalScrollIndicator={false}
                // contentContainerStyle={{ flexGrow: 0 }} // Ensures it takes only the required space
                style={{ height: 230 }} // Set fixed height to avoid layout issues
              />

<FlatList
        data={formattedData}
        renderItem={rendorIcon}
        keyExtractor={(item) => item.title}
        style ={{padding : 16}}
      />
            </View>
          </View>
        </Modal>

      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {

    height: "99%",
    width: "100%",
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // padding: 16,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

});

export default NewSubCategoryScreen;