import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { toaster } from '../utils/toaster';
import { apiService } from '../utils/api';

// 🔄 Fetch login state from AsyncStorage
export const checkLoginStatus = createAsyncThunk('auth/checkLoginStatus', async () => {
    const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
    return isLoggedIn === 'true';
});

export const sendOTPRedux = createAsyncThunk('send-otp', async ({ mobile, extra }) => {
    try {
        const { data } = await apiService.post('/sent-otp', { mobile });
        extra?.(); // ✅ Call extra function if provided
        toaster("success", data?.message);
    } catch (error) {
        toaster("error", error.response?.data?.message || "Failed to send OTP");
    }
});


export const verifyOTPRedux = createAsyncThunk('verify-otp', async ({ mobile, otp }, { dispatch }) => {
    try {
        const { data } = await apiService.post('/verify-otp', { mobile, otp });
        toaster("success", data?.message);
        dispatch(login());
        return data?.data;
    } catch (error) {
        toaster("error", error.response?.data?.message || "OTP verification failed");
    }
});

// 🔑 Authentication Slice
const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
        isLoading: true, 
        userData : {}
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
        builder.addCase(verifyOTPRedux.fulfilled, (state, action) => {
            console.log("action",action)
            state.userData = action.payload;
            state.isLoading = false;
        });
    }
});

export const { login, logout, sentOTP } = authSlice.actions;
export default authSlice.reducer;
