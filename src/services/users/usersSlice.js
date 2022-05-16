import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import usersService from "./usersService";

const initialState = {
	usersList: {
		data: [],
		isError: false,
		message: '',
		isLoading: false
	}
}

export const getUsersList = createAsyncThunk(
	'user/listing',
	async (requestData, thunkAPI) => {
		try {
			return await usersService.getUsersList(requestData)
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

export const usersSlice = createSlice({
	name: 'users-slice',
	initialState,
	reducers: {
		reset: (state) => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(getUsersList.pending, (state) => {
				state.usersList.isLoading = true
			})
			.addCase(getUsersList.fulfilled, (state, action) => {
				state.usersList.isLoading = false
				state.usersList.data = action.payload.data
			})
			.addCase(getUsersList.rejected, (state, action) => {
				state.usersList.isLoading = false
				state.usersList.isError = true
				state.usersList.message = action.payload
			});
	},
})

export default usersSlice.reducer;
