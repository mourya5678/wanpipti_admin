import axios from "axios";
import { message as toast } from "antd";
import { pageRoutes } from "../../Routes/pageRoutes";
import {
    BASE_URL
} from "../../Routes/bakendEndPoint";
import { pipDeleteTokenAuth, pipGetAccessToken } from "../../Auth/Pip";

export const API_REQUEST = async (props) => {
    const { BASE = BASE_URL, url, method, data, headers, params, isErrorToast = true, isSuccessToast = true } = props;
    const token = pipGetAccessToken();

    const requestOptions = {
        url: BASE + url,
        method,
        headers: {
            Authorization: `Bearer ${token}`,
            ...headers,
        },
        params: method === "GET" ? params : undefined,
        data: method !== "GET" ? data : undefined,
    };

    try {
        const response = await axios(requestOptions);
        if (method !== "GET" && response?.data?.success == true) {
            isSuccessToast == true && toast.success(response?.data?.message);
        } else if (response?.data?.success == false && method !== "GET") {
            isSuccessToast == true && toast.error(response?.data?.message);
        }
        return response?.data;
    } catch (error) {
        if (isErrorToast) {
            if (error.response) {
                if (error?.response?.data?.status == 401) {
                    toast.error(error?.response?.data?.message);
                    pipDeleteTokenAuth();
                    window.location.href = pageRoutes?.login;
                    return;
                }
                toast.error(error?.response?.data?.message);
            } else if (error.request) {
                toast.error("No response received from server");
            } else {
                toast.error("Error:", error.message);
            }
        }
        throw error.response;
    }
};