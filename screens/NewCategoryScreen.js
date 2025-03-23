import { FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Input from '../components/reusable/Input';
import { data, showData } from './EditCategories';
const NewCategoryScreen = ({navigation}) => {

const [selectedTab, setSelectedTab] = useState("1")
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={{alignItems: "center", flexDirection : "row"}}>
        <Icon name={"close"} color={"#222222"} size={26} onPress={() => navigation.goBack()}/>

        <Text style={{ fontSize: 22, marginLeft : 16 }}>New category</Text>
        </View>
        <Icon name={"check"} color={"#222222"} size={26} onPress={() => navigation.goBack()}/>
      </View>
      <View style={[styles.container, {marginTop : 20}]}>
        <Pressable  style={[styles.income, {backgroundColor : selectedTab == "1" ? "#eee" : "#fff"}]} onPress={() => setSelectedTab("1")}>
        { selectedTab == "1"  &&<Icon name={"check"} color={"#222222"} size={20} style={{marginRight : 7}}/>}
            <Text style={styles.heading}>Income</Text>
            </Pressable>
        <Pressable style={[styles.expense, {backgroundColor : selectedTab == "2" ? "#eee" : "#fff"}]} onPress={() => setSelectedTab("2")}>
        { selectedTab == "2" &&<Icon name={"check"} color={"#222222"} size={20} style={{marginRight : 7}}/>}
            <Text style={styles.heading}>Expense</Text>
            </Pressable>
      </View>
      <View style={[styles.container]}>
        <View style={{flex : 1, marginTop : 20}}>
            <Input
                              placeholder="Name"
                              value={""}
                              onChangeText={() => ""}
 
                            />
        </View>
        <TouchableOpacity style={{marginLeft:10 ,backgroundColor  : "red", flexDirection : "row", justifyContent  : "center", alignItems : "center", height : 45, width : 45, borderRadius : 50}}>
        <Icon name={"cart"} color={"#fff"} size={20} />
        </TouchableOpacity>
      </View>
      <View style={[styles.container, {marginTop : 0}]}>
            <Text style={{fontSize : 14,  color : "#333"}}>Subcategories</Text>
            <TouchableOpacity >
            <Icon name={"playlist-plus"} color={"#222"} size={22} />
            </TouchableOpacity>

      </View>
      <View style={{height : 1, backgroundColor : "#eee", marginTop : 15,marginBottom : 15, marginHorizontal : -16}}></View>
       <View style={{ flex: 1, backgroundColor: "#fff" }}>
              <FlatList
                  data={data}
                  renderItem={showData}
                  keyExtractor={(item) => item?.name}
                //   contentContainerStyle={{ padding: 16, backgroundColor: "#fff" }} // Adds spacing
      
              />
          </View>
    </View>
  )
}

export default NewCategoryScreen

const styles = StyleSheet.create({
  main: {
    padding: 16,
    paddingTop : 36,
    backgroundColor : "#fff",
    flex : 1
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  income : {
    borderTopLeftRadius : 20,
    borderBottomLeftRadius : 20,
    borderWidth : 1,
    borderColor : "#ccc",
    flex : 1,
    flexDirection : "row",
    alignItems : "center",
    justifyContent : "center"
  },
  expense : {
    borderTopRightRadius : 20,
    borderBottomRightRadius : 20,
    borderWidth : 1,
    borderColor : "#ccc",
    flex : 1,
    flexDirection : "row",
    alignItems : "center",
    justifyContent : "center"
  },
  heading : {
    textAlign  : "center",
    fontSize : 15,
    paddingVertical : 8
  }
})