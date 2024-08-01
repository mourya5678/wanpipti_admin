import { createSlice } from "@reduxjs/toolkit";
import {
    getUsersData,
    deleteUser,
    editUserDetail,
    getAllGames
} from "../actions/usersAction";

const initialState = {
    isLoading: false,
    all_users: [],
    userData: {},
    all_games: []
};

export const userSlice = createSlice({
    name: "User",
    initialState: initialState,
    reducers: {
        userModalData: (state, action) => {
            state.userData = action?.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getUsersData.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(getUsersData.fulfilled, (state, action) => {
            const { data } = action?.payload || {};
            state.all_users = data ?? []
            state.isLoading = false;
        });
        builder.addCase(getUsersData.rejected, (state, action) => {
            state.isLoading = false;
        });

        builder.addCase(deleteUser.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.isLoading = false;
        });
        builder.addCase(deleteUser.rejected, (state, action) => {
            state.isLoading = false;
        });

        builder.addCase(editUserDetail.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(editUserDetail.fulfilled, (state, action) => {
            state.isLoading = false;
        });
        builder.addCase(editUserDetail.rejected, (state, action) => {
            state.isLoading = false;
        });

        builder.addCase(getAllGames.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(getAllGames.fulfilled, (state, action) => {
            const { data } = action?.payload || {};
            state.all_games = data ?? []
            state.isLoading = false;
        });
        builder.addCase(getAllGames.rejected, (state, action) => {
            state.isLoading = false;
        });

    },
});

export const { userModalData } = userSlice.actions;
export default userSlice.reducer;