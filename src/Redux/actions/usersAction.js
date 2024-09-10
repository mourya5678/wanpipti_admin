import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_REQUEST } from ".";
import {
    getAllUsersListEndPointURL,
    deleteUserByIdEndPointURL,
    updateUserDetailsEndPointURL,
    createGameEndPointURL,
    getAllGamesEndPointURL,
    myProfileEndPointURL,
    updateMyProfileEndPointURL,
    changePasswordEndPointURL,
    getAllWalletTransactionENdPointURL,
    getAllBetsLimitDataEndPointURL,
    setBetLimitEndPointURL,
    updateBetLimitEndPointURL,
    deleteBetLimitDataEndPointURL,
    getBetsDatByDatEndpointURL,
    addNewFaqEndPointURL,
    getAllFaqEndPointURL,
    deleteFaqEndPointURl,
    updateFaqEndPointURL,
    gameDetailUpdateEndPointURL,
    getDahboardDataEndPointURL,
    getWithDrawlDataEndPointURL,
    updateWithDrawlStatusEndPointURL
} from "../../Routes/bakendEndPoint";

export const getUsersData = createAsyncThunk("user-data", async () => {
    try {
        const response = await API_REQUEST({
            url: getAllUsersListEndPointURL,
            method: "GET",
            isErrorToast: false
        });
        return response;
    } catch (error) {
        console.log(error);
    }
});

export const editUserDetail = createAsyncThunk("update-user", async (props) => {
    const { payload, callback } = props;
    try {
        const response = await API_REQUEST({
            url: updateUserDetailsEndPointURL + payload?.id,
            method: "POST",
            data: payload?.data,
            headers: {
                'Content-Type': 'multipart/form-data',
                'accept': 'application/json',
            }
        });
        callback(response);
        return response;
    } catch (error) {
        callback(null, error);
    }
});

export const deleteUser = createAsyncThunk("delete-user", async (props) => {
    const { payload, callback } = props;
    try {
        const response = await API_REQUEST({
            url: deleteUserByIdEndPointURL + payload?.user_id,
            method: "DELETE",
        });
        callback(response);
        return response;
    } catch (error) {
        callback(null, error);
    }
});

export const addWinningNumber = createAsyncThunk("winnig-number", async (props) => {
    const { payload, callback } = props;
    try {
        const response = await API_REQUEST({
            url: createGameEndPointURL,
            method: "POST",
            data: payload
        });
        callback(response);
        return response;
    } catch (error) {
        callback(null, error);
    }
});

export const getAllGames = createAsyncThunk("get-games", async () => {
    try {
        const response = await API_REQUEST({
            url: getAllGamesEndPointURL,
            method: "GET",
            isErrorToast: false
        });
        return response;
    } catch (error) {
        console.log(error);
    }
});

export const getMyProfileData = createAsyncThunk("my-profile", async () => {
    try {
        const response = await API_REQUEST({
            url: myProfileEndPointURL,
            method: "GET",
            isErrorToast: false
        });
        return response;
    } catch (error) {
        console.log(error)
    }
});

export const updateMyProfileData = createAsyncThunk("update-profile", async (props) => {
    const { payload, callback } = props;
    try {
        const response = await API_REQUEST({
            url: updateMyProfileEndPointURL,
            method: "POST",
            data: payload,
            headers: {
                'Content-Type': 'multipart/form-data',
                'accept': 'application/json',
            }
        });
        callback(response);
        return response;
    } catch (error) {
        callback(null, error);
    }
});

export const changeMyPassword = createAsyncThunk("change-password", async (props) => {
    const { payload, callback } = props;
    try {
        const response = await API_REQUEST({
            url: changePasswordEndPointURL,
            method: "POST",
            data: payload,
        });
        callback(response);
        return response;
    } catch (error) {
        callback(null, error);
    }
});

export const AllTrasactionWallet = createAsyncThunk("wallet-transaction", async () => {
    try {
        const response = await API_REQUEST({
            url: getAllWalletTransactionENdPointURL,
            method: "GET",
            isErrorToast: false
        });
        return response;
    } catch (error) {
        console.log(error)
    }
});

export const getBetLimitData = createAsyncThunk("bet-limit", async () => {
    try {
        const response = await API_REQUEST({
            url: getAllBetsLimitDataEndPointURL,
            method: "GET",
            isErrorToast: false
        });
        return response;
    } catch (error) {
        console.log(error)
    }
});

export const AddBetLimitForNumber = createAsyncThunk("add-bet-limit", async (props) => {
    const { payload, callback } = props;
    try {
        const response = await API_REQUEST({
            url: setBetLimitEndPointURL,
            method: "POST",
            data: payload,
        });
        callback(response);
        return response;
    } catch (error) {
        callback(null, error);
    }
});

export const UpdateBetLimitForNumber = createAsyncThunk("update-bet-limit", async (props) => {
    const { payload, callback } = props;
    try {
        const response = await API_REQUEST({
            url: updateBetLimitEndPointURL,
            method: "POST",
            data: payload,
        });
        callback(response);
        return response;
    } catch (error) {
        callback(null, error);
    }
});

export const deleteSetBet = createAsyncThunk("delete-bet-limit", async (props) => {
    const { payload } = props;
    try {
        const response = await API_REQUEST({
            url: deleteBetLimitDataEndPointURL + payload,
            method: "DELETE",
        });
        return response;
    } catch (error) {
        return error ?? null
    }
});

export const getGamesById = createAsyncThunk("get-game-by-id", async (props) => {
    const { payload } = props;
    try {
        const response = await API_REQUEST({
            url: getBetsDatByDatEndpointURL,
            method: "POST",
            data: payload,
            isErrorToast: false
        });
        return response;
    } catch (error) {
        return error ?? null
    }
});

export const AddNewQuiz = createAsyncThunk("add_new_quiz", async (props) => {
    const { payload, callback } = props;
    try {
        const response = await API_REQUEST({
            url: addNewFaqEndPointURL,
            method: "POST",
            data: payload,
        });
        callback(response);
        return response;
    } catch (error) {
        callback(error ?? null);
        return error ?? null
    }
});

export const getAllFaq = createAsyncThunk("get-faq", async () => {
    try {
        const response = await API_REQUEST({
            url: getAllFaqEndPointURL,
            method: "GET",
            isErrorToast: false
        });
        return response;
    } catch (error) {
        return error ?? null
    }
});

export const deleteFaq = createAsyncThunk("delete-faq", async (props) => {
    const { payload, callback } = props;
    try {
        const response = await API_REQUEST({
            url: deleteFaqEndPointURl + payload?.user_id,
            method: "DELETE",
        });
        callback(response);
        return response;
    } catch (error) {
        callback(null, error);
    }
});

export const UpdateNewQuiz = createAsyncThunk("update_new_quiz", async (props) => {
    const { payload, callback, id } = props;
    try {
        const response = await API_REQUEST({
            url: updateFaqEndPointURL + id,
            method: "PUT",
            data: payload,
        });
        callback(response);
        return response;
    } catch (error) {
        callback(error ?? null);
        return error ?? null
    }
});

export const UpdateGameDetail = createAsyncThunk("update-game-details", async (props) => {
    const { payload, callback } = props;
    try {
        const response = await API_REQUEST({
            url: gameDetailUpdateEndPointURL,
            method: "POST",
            data: payload,
        });
        callback(response);
        return response;
    } catch (error) {
        callback(null, error);
    }
});

export const getDashboardData = createAsyncThunk("get-dahboard", async () => {
    try {
        const response = await API_REQUEST({
            url: getDahboardDataEndPointURL,
            method: "GET",
            isErrorToast: false
        });
        return response;
    } catch (error) {
        return error ?? null
    }
});

export const getWithdrawData = createAsyncThunk("withdraw-details", async () => {
    try {
        const response = await API_REQUEST({
            url: getWithDrawlDataEndPointURL,
            method: "GET",
            isErrorToast: false
        });
        return response;
    } catch (error) {
        console.log(error);
    }
});

export const UpdateWithdrawlStatus = createAsyncThunk("withdraw-status", async (props) => {
    const { payload, callback } = props;
    try {
        const response = await API_REQUEST({
            url: updateWithDrawlStatusEndPointURL,
            method: "POST",
            data: payload,
        });
        callback(response);
        return response;
    } catch (error) {
        callback(null, error);
    }
});