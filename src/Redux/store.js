import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import usersReducer from "./reducers/usersReducer";

const store = configureStore({
    reducer: {
        authReducer,
        usersReducer
    },
});

export default store;