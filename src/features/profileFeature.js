import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        isLogin: false,
    },
};

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setIsLogin: (state, action) => {
            state.value.isLogin = action.payload;
        },
    },
});

export const { setIsLogin } = profileSlice.actions;

export default profileSlice.reducer;