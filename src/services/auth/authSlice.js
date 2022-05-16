import {createAsyncThunk} from "@reduxjs/toolkit";
import authService from "./authService";

export const login = createAsyncThunk(
	'auth/login',
	async (requestData, thunkAPI) => {
		try {
			return await authService.login(requestData)
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString()
			return thunkAPI.rejectWithValue(message)
		}
	}
)
