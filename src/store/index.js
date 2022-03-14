import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../features/profileFeature";

export const store = configureStore({
    reducer: {
        profileFeature: profileReducer
    },
});