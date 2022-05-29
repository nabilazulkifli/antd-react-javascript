import {hsAxios} from "../axiosBase";

const getUsersList = async () => {
	const res = await hsAxios.get("/users")
	return res.data;
}

const createUsers = async (requestData) => {
	const res = await hsAxios.post("/users", requestData)
	console.log("checkeddddddd",res)
	return res.data;
}
const usersService = {
	getUsersList,
	createUsers
}

export default usersService
