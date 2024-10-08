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
    changeMyPassword,
    AddNewQuiz,
    getAllFaq,
    deleteFaq,
    getGamesById,
    UpdateNewQuiz,
    getBetLimitData,
    UpdateGameDetail,
    getDashboardData,
    AllTrasactionWallet,
    getWithdrawData,
    UpdateWithdrawlStatus,
    getAllGameResults
} from "../actions/usersAction";

const initialState = {
    isLoading: false,
    all_users: [],
    userData: {},
    all_games: [],
    myProfile: {},
    betLimitData: {},
    all_faq: [],
    games_bet_details: [],
    user_bet_details: {},
    bet_data: [],
    dashboardData: {},
    all_transaction: [],
    all_withdrawl_request: [],
    game_result: []
};

export const userSlice = createSlice({
    name: "User",
    initialState: initialState,
    reducers: {
        userModalData: (state, action) => {
            state.userData = action?.payload;
        },
        betLimitModalData: (state, action) => {
            state.betLimitData = action?.payload;
        },
        viewUserBetDetails: (state, action) => {
            state.user_bet_details = action?.payload;
        },
    },
    extraReducers: (builder) => {
        // user-data
        builder.addCase(getUsersData.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(getUsersData.fulfilled, (state, action) => {
            const { data } = action?.payload || [];
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

        // AddNewQuiz
        builder.addCase(AddNewQuiz.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(AddNewQuiz.fulfilled, (state, action) => {
            state.isLoading = false;
        });
        builder.addCase(AddNewQuiz.rejected, (state, action) => {
            state.isLoading = false;
        });

        // getAllFaq
        builder.addCase(getAllFaq.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(getAllFaq.fulfilled, (state, action) => {
            const { data } = action?.payload || [];
            state.all_faq = data ?? []
            state.isLoading = false;
        });
        builder.addCase(getAllFaq.rejected, (state, action) => {
            state.isLoading = false;
        });

        // deleteFaq
        builder.addCase(deleteFaq.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(deleteFaq.fulfilled, (state, action) => {
            state.isLoading = false;
        });
        builder.addCase(deleteFaq.rejected, (state, action) => {
            state.isLoading = false;
        });

        // UpdateNewQuiz
        builder.addCase(UpdateNewQuiz.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(UpdateNewQuiz.fulfilled, (state, action) => {
            state.isLoading = false;
        });
        builder.addCase(UpdateNewQuiz.rejected, (state, action) => {
            state.isLoading = false;
        });

        // getGamesById
        builder.addCase(getGamesById.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(getGamesById.fulfilled, (state, action) => {
            const { data } = action?.payload || [];
            state.games_bet_details = data?.message ? [] : data
            state.isLoading = false;
        });
        builder.addCase(getGamesById.rejected, (state, action) => {
            state.isLoading = false;
        });

        // getBetLimitData
        builder.addCase(getBetLimitData.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(getBetLimitData.fulfilled, (state, action) => {
            const { data } = action?.payload || [];
            state.bet_data = data ?? []
            state.isLoading = false;
        });
        builder.addCase(getBetLimitData.rejected, (state, action) => {
            state.isLoading = false;
        });

        // UpdateGameDetail
        builder.addCase(UpdateGameDetail.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(UpdateGameDetail.fulfilled, (state, action) => {
            state.isLoading = false;
        });
        builder.addCase(UpdateGameDetail.rejected, (state, action) => {
            state.isLoading = false;
        });

        // getDashboardData
        builder.addCase(getDashboardData.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(getDashboardData.fulfilled, (state, action) => {
            const { data } = action?.payload || {};
            state.dashboardData = data ?? {}
            state.isLoading = false;
        });
        builder.addCase(getDashboardData.rejected, (state, action) => {
            state.isLoading = false;
        });

        // AllTrasactionWallet
        builder.addCase(AllTrasactionWallet.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(AllTrasactionWallet.fulfilled, (state, action) => {
            const { data } = action?.payload || [];
            state.all_transaction = data ?? []
            state.isLoading = false;
        });
        builder.addCase(AllTrasactionWallet.rejected, (state, action) => {
            state.isLoading = false;
        });

        // getWithdrawData
        builder.addCase(getWithdrawData.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(getWithdrawData.fulfilled, (state, action) => {
            const { data } = action?.payload || [];
            state.all_withdrawl_request = data ?? []
            state.isLoading = false;
        });
        builder.addCase(getWithdrawData.rejected, (state, action) => {
            state.isLoading = false;
        });

        // UpdateWithdrawlStatus
        builder.addCase(UpdateWithdrawlStatus.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(UpdateWithdrawlStatus.fulfilled, (state, action) => {
            state.isLoading = false;
        });
        builder.addCase(UpdateWithdrawlStatus.rejected, (state, action) => {
            state.isLoading = false;
        });

        // getAllGameResults
        builder.addCase(getAllGameResults.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(getAllGameResults.fulfilled, (state, action) => {
            const { data } = action?.payload || [];
            state.game_result = data ?? []
            state.isLoading = false;
        });
        builder.addCase(getAllGameResults.rejected, (state, action) => {
            state.isLoading = false;
        });

    },
});

export const { userModalData, betLimitModalData, viewUserBetDetails } = userSlice.actions;
export default userSlice.reducer;