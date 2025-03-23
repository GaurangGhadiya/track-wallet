import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyAgp6A5VqzW5JJtGIIcKh6HjRB_-AZjG5c",
  authDomain: "track-wallet-110d7.firebaseapp.com",
  projectId: "track-wallet-110d7",
  storageBucket: "track-wallet-110d7.firebasestorage.app",
  messagingSenderId: "698607683748",
  appId: "1:698607683748:web:51c2cbc692546f020efe31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth with AsyncStorage for React Native
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
