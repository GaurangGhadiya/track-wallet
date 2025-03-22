import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Layout = ({children}) => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={[styles.container, styles.view]}>

      {children}
        </View>
    </SafeAreaView>
  )
}

export default Layout

const styles = StyleSheet.create({
    container : {
        flex :1,
       marginTop : 10
    },
    view :{
        paddingVertical : 16,
        paddingHorizontal : 16,
    }
})