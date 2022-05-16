import {masterSetupAxios} from "../axiosBase";

const login = async (requestData) => {
	const { username, password } = requestData;
	const res = await masterSetupAxios.post("/login", {
		username,
		password
	})
	return res.data;
}

const authService = {
	login
}

export default authService
