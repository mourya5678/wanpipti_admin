import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_REQUEST } from ".";
import {
    loginEndPointURL,
    forgotPasswordEndPointURL
} from "../../Routes/bakendEndPoint";
import { pipSetAccessToken } from "../../Auth/Pip";

export const adminLogin = createAsyncThunk("auth-login", async (props) => {
    const { payload, callback } = props;
    try {
        const response = await API_REQUEST({
            url: loginEndPointURL,
            method: "POST",
            data: payload,
        });
        pipSetAccessToken(response?.data);
        callback(response);
        return response;
    } catch (error) {
        callback(null, error);
    }
});

export const adminForgotPassword = createAsyncThunk("auth-forgot", async (props) => {
    const { payload, callback } = props;
    try {
        const response = await API_REQUEST({
            url: forgotPasswordEndPointURL,
            method: "POST",
            data: payload,
        });
        callback(response);
        return response;
    } catch (error) {
        callback(null, error);
    }
});