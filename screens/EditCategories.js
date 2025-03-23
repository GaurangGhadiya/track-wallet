


import React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export let data = [
    {
        name: "Salary",
        icon: "home",
        backgroundColor: "skyblue"
    },
    {
        name: "Gifts",
        icon: "home",
        backgroundColor: "skyblue"
    },
    {
        name: "Other",
        icon: "home",
        backgroundColor: "skyblue"
    },
]

export const showData = ({ item }) => {
    return (<TouchableOpacity key={item?.name} style={{ flexDirection: "row", alignItems: "center", marginBottom: 15 }}>
        <View style={{ backgroundColor: item?.backgroundColor, borderRadius: 50, height: 40, width: 40, justifyContent: "center", alignItems: "center" }}>
            <Icon name={item.icon} color={"#fff"} size={26} />

        </View>
        <Text style={{ fontSize: 18, marginLeft: 15, color: "#444" }}>{item.name}</Text>
    </TouchableOpacity>)
}

// Screens for Income and Expense
const IncomeScreen = () => (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <FlatList
            data={data}
            renderItem={showData}
            keyExtractor={(item) => item?.name}
            contentContainerStyle={{ padding: 16, backgroundColor: "#fff" }} // Adds spacing

        />
    </View>
);

const ExpenseScreen = () => (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <FlatList
            data={data}
            renderItem={showData}
            keyExtractor={(item) => item?.name}
            contentContainerStyle={{ padding: 16, backgroundColor: "#fff" }} // Adds spacing

        />
    </View>
);

// Create Top Tabs
const Tab = createMaterialTopTabNavigator();

const EditCategoriesScreen = ({ navigation }) => {
    return (
        <View style={styles.main}>
            <View style={styles.header}>
                <View style={{ alignItems: "center", flexDirection: "row" }}>
                    <Icon name={"backburger"} color={"#222222"} size={26} onPress={() => navigation.goBack()} />

                    <Text style={{ fontSize: 22, marginLeft: 16 }}>Edit categories</Text>
                </View>
                <Icon name={"plus"} color={"#222222"} size={26} onPress={() => navigation.navigate("NewCategory")} />
            </View>

            {/* Top Tab Navigator */}
            <Tab.Navigator
                screenOptions={{
                    tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
                    tabBarStyle: { backgroundColor: '#fff' },
                    tabBarIndicatorStyle: { backgroundColor: '#7F3DFF', height: 3 },
                    tabBarActiveTintColor: '#222',
                    tabBarInactiveTintColor: '#666',
                }}
            >
                <Tab.Screen name="Income" component={IncomeScreen} />
                <Tab.Screen name="Expense" component={ExpenseScreen} />
            </Tab.Navigator>
        </View>
    );
};

export default EditCategoriesScreen

const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: "#fff"
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        paddingBottom: 0,
        marginBottom: 10,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});