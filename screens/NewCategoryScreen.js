import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const NewCategoryScreen = ({navigation}) => {


  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={{alignItems: "center", flexDirection : "row"}}>
        <Icon name={"close"} color={"#222222"} size={26} onPress={() => navigation.goBack()}/>

        <Text style={{ fontSize: 22, marginLeft : 16 }}>New category</Text>
        </View>
        <Icon name={"check"} color={"#222222"} size={26} onPress={() => navigation.goBack()}/>
      </View>
    </View>
  )
}

export default NewCategoryScreen

const styles = StyleSheet.create({
  main: {
    padding: 16,
    marginTop : 20
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // borderWidth : 1,
    // borderColor : "red"
  }
})