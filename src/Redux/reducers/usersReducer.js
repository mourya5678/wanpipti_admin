import { createSlice } from "@reduxjs/toolkit";
import { pipSaveProfile } from "../../Auth/Pip";
import {
    getUsersData,
    deleteUser,
    editUserDetail,
    getAllGames,
    getMyProfileData,
    addWinningNumber,
    updateMyProfileData,
    changeMyPassword
} from "../actions/usersAction";

const initialState = {
    isLoading: false,
    all_users: [],
    userData: {},
    all_games: [],
    myProfile: {}
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
        // user-data
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

        // delete-user
        builder.addCase(deleteUser.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.isLoading = false;
        });
        builder.addCase(deleteUser.rejected, (state, action) => {
            state.isLoading = false;
        });

        // update-user
        builder.addCase(editUserDetail.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(editUserDetail.fulfilled, (state, action) => {
            state.isLoading = false;
        });
        builder.addCase(editUserDetail.rejected, (state, action) => {
            state.isLoading = false;
        });

        // winnig-number
        builder.addCase(addWinningNumber.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(addWinningNumber.fulfilled, (state, action) => {
            state.isLoading = false;
        });
        builder.addCase(addWinningNumber.rejected, (state, action) => {
            state.isLoading = false;
        });

        // get-games
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

        // my-profile
        builder.addCase(getMyProfileData.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(getMyProfileData.fulfilled, (state, action) => {
            const { data } = action?.payload || {};
            console.log(data)
            state.myProfile = data ?? {}
            pipSaveProfile(data);
            state.isLoading = false;
        });
        builder.addCase(getMyProfileData.rejected, (state, action) => {
            state.isLoading = false;
        });

        // update-profile
        builder.addCase(updateMyProfileData.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(updateMyProfileData.fulfilled, (state, action) => {
            state.isLoading = false;
        });
        builder.addCase(updateMyProfileData.rejected, (state, action) => {
            state.isLoading = false;
        });

        // change-password
        builder.addCase(changeMyPassword.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(changeMyPassword.fulfilled, (state, action) => {
            state.isLoading = false;
        });
        builder.addCase(changeMyPassword.rejected, (state, action) => {
            state.isLoading = false;
        });
    },
});

export const { userModalData } = userSlice.actions;
export default userSlice.reducer;