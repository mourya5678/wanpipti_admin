import { createSlice } from "@reduxjs/toolkit";
import {
    adminLogin,
    adminForgotPassword
} from "../actions/authActions";

const initialState = {
    isLoading: false,
    isToggle: false,
};

export const authSlice = createSlice({
    name: "Auth",
    initialState: initialState,
    reducers: {
        toggleChange: (state, action) => {
            state.isToggle = action?.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(adminLogin.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(adminLogin.fulfilled, (state, action) => {
            state.isLoading = false;
        });
        builder.addCase(adminLogin.rejected, (state, action) => {
            state.isLoading = false;
        });

        builder.addCase(adminForgotPassword.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(adminForgotPassword.fulfilled, (state, action) => {
            state.isLoading = false;
        });
        builder.addCase(adminForgotPassword.rejected, (state, action) => {
            state.isLoading = false;
        });
    },
});

export const { toggleChange } = authSlice.actions;
export default authSlice.reducer;