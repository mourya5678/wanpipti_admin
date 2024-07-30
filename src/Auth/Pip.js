import { message, message as toast } from 'antd';
import moment from "moment";

// Currency Symbol
export const curSym = "$";

// Authorization
export const pipSetAccessToken = (token) => {
    localStorage.setItem("access-token", token);
};

export const pipGetAccessToken = () => {
    return localStorage.getItem("access-token");
};

// Date View Format
export const pipViewDate = (date) => {
    return moment(date).format("DD-MM-YYYY");
};

export const pipDeleteToken = () => {
    localStorage.clear();
    message.success("Successfully logged out");
};

export const pipSuccessMessage = (message) => {
    return toast.success(message)
};

export const pipErrorMessage = (message) => {
    return toast.error(message)
};

export const pipSaveProfile = (profile) => {
    localStorage.setItem('user_data', JSON.stringify(profile));
};

export const pipGetProfile = () => {
    return JSON.parse(localStorage.getItem('user_data'));
};