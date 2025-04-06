import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { store } from './redux/store';
import { checkLoginStatus } from './redux/authSlice';

import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';
import { useEffect } from 'react';
import EditCategoriesScreen from './screens/EditCategories';
import NewCategoryScreen from './screens/NewCategoryScreen';
import Toast from "react-native-toast-message";
import { toastConfig } from './utils/toaster';
import UpdateProfileScreen from './screens/UpdateProfileScreen';
import SettingScreen from './screens/SettingScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerData from './components/ui/Drawer';
import FollowUsScreen from './screens/FollowUsScreen';
import AboutUsScreen from './screens/AboutUsScreen';
import MoreSettingScreen from './screens/MoreSettingScreen';
import NotificationScreen from './screens/NotificationScreen';
import ExportDataScreen from './screens/ExportDataScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="MainTabs"   screenOptions={{
      drawerStyle: {
        width: 270, // Set the desired width here
      },
    }}     drawerContent={props => <DrawerData {...props} />}
>
      <Drawer.Screen name="MainTabs" component={MyTabs} options={{ headerShown: false }} />

    </Drawer.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === 'Home') iconName = 'home';
        else if (route.name === 'Categories') iconName = 'chart-donut';
        else if (route.name === 'Analytics') iconName = 'chart-box-outline';
        else if (route.name === 'Transactions') iconName = 'clipboard-list-outline';

        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: "#7F3DFF",
      tabBarInactiveTintColor: "#EEE5FF",
      headerShown: false,
      tabBarStyle: { height: 60 }
    })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Categories" component={CategoriesScreen} />
      <Tab.Screen name="Analytics" component={ProfileScreen} />
      <Tab.Screen name="Transactions" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

// ✅ Move Redux hooks inside a separate component
function MainNavigator() {
  const dispatch = useDispatch();
  const { isLoggedIn, isLoading } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(checkLoginStatus()); // Check login status on app load
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#7F3DFF" />
      </View>
    );
  }

  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        <>
          <Stack.Screen name="Home" component={MyDrawer} options={{ headerShown: false }} />
          <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
          <Stack.Screen name="UpdateProfile" component={UpdateProfileScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Setting" component={SettingScreen} options={{ headerShown: false }} />
          <Stack.Screen name="MoreSetting" component={MoreSettingScreen} options={{ headerShown: false }} />
          <Stack.Screen name="EditCategories" component={EditCategoriesScreen} options={{ headerShown: false }} />
          <Stack.Screen name="NewCategory" component={NewCategoryScreen} options={{ headerShown: false }} />
          <Stack.Screen name="FollowUs" component={FollowUsScreen} options={{ headerShown: false }} />
          <Stack.Screen name="AboutUs" component={AboutUsScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Notification" component={NotificationScreen} options={{ headerShown: false }} />
          <Stack.Screen name="ExportData" component={ExportDataScreen} options={{ headerShown: false }} />
        </>
      ) : (
        <>
          <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        </>
      )}
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </GestureHandlerRootView>
      <Toast config={toastConfig} />
    </Provider>
  );
}

const styles = StyleSheet.create({});
