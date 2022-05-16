import {cepAxios} from "../axiosBase";

const getUsersList = async (requestData) => {
	const res = await cepAxios.get("/users")
	return res.data;
}

const usersService = {
	getUsersList
}

export default usersService
