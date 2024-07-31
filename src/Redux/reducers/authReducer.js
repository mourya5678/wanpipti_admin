import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isLoading: false,
    isToggle: false,
    profile: {},
};

export const authSlice = createSlice({
    name: "Auth",
    initialState: initialState,
    reducers: {
        toggleChange: (state, action) => {
            state.isToggle = action?.payload;
        }
    }
});

export const { toggleChange } = authSlice.actions;
export default authSlice.reducer;