import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../features/profileFeature";
import usersSlice from "../services/users/usersSlice";
import authService from "../services/auth/authService";

export const store = configureStore({
    reducer: {
        profileFeature: profileReducer,
        users: usersSlice,
        auth: authService
    },
});
