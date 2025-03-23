import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

// 🔄 Fetch login state from AsyncStorage
export const checkLoginStatus = createAsyncThunk('auth/checkLoginStatus', async () => {
    const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
    return isLoggedIn === 'true';
});

// 🔑 Authentication Slice
const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
        isLoading: true,  // Ensures splash screen doesn't flash onboarding unnecessarily
    },
    reducers: {
        login: (state) => {
            state.isLoggedIn = true;
            AsyncStorage.setItem('isLoggedIn', 'true'); // Store login status
        },
        logout: (state) => {
            state.isLoggedIn = false;
            AsyncStorage.removeItem('isLoggedIn'); // Clear login state
        },
    },
    extraReducers: (builder) => {
        builder.addCase(checkLoginStatus.fulfilled, (state, action) => {
            state.isLoggedIn = action.payload;
            state.isLoading = false;
        });
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
