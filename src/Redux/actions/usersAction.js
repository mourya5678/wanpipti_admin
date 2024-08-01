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
    changePasswordEndPointURL
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