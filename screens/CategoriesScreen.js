import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const CategoriesScreen = ({navigation}) => {


  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={{ fontSize: 22 }}>Categories</Text>
        <Icon name={"pencil"} color={"#222222"} size={26} onPress={() => navigation.navigate("EditCategories")}/>
      </View>
      
    </View>
  )
}

export default CategoriesScreen

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