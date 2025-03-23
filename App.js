import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as SplashScreen from "expo-splash-screen";

import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import { Colors } from './utils/Colors';
import CategoriesScreen from './screens/CategoriesScreen';
import { useEffect, useState } from 'react';
import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'home';
        } else if (route.name === 'Categories') {
          iconName = 'chart-donut';
        } else if (route.name === 'Add') {
          iconName = 'plus';
        } else if (route.name === 'Analytics') {
          iconName = 'chart-box-outline';
        } else if (route.name === 'Transactions') {
          iconName = 'clipboard-list-outline';
        }

        return <Icon name={iconName} size={size} color={color} />;

      },
      tabBarActiveTintColor: "#6512F1", 
      tabBarInactiveTintColor: "#E2DAFF",
      headerShown : false,
      
      tabBarStyle : {height : 60}
    })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Categories" component={CategoriesScreen} />
      <Tab.Screen name="Analytics" component={ProfileScreen} />
      <Tab.Screen name="Transactions" component={ProfileScreen} />
    </Tab.Navigator>
  );
}


export default function App() {

  useEffect(() => {
    const loadApp = async () => {
      try {
        await SplashScreen.preventAutoHideAsync(); // Keep splash screen visible
        // Simulate loading (e.g., fetch data, auth check)
        setTimeout(() => {
          SplashScreen.hideAsync(); // Hide splash after loading
        }, 2000);
      } catch (e) {
        console.warn(e);
      }
    };
    loadApp();
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Home" component={MyTabs} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Categories" component={ProfileScreen} />
          <Stack.Screen name="Add" component={ProfileScreen} />
          <Stack.Screen name="Analytics" component={ProfileScreen} />
          <Stack.Screen name="Transactions" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({

});
