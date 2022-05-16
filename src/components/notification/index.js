import {notification} from "antd";

export const showSuccessNotification = (message) => {
	notification["success"]({
		message: 'Success',
		description:
		message ? message : 'Operation Success',
	});
}

export const showErrorNotification = (error) => {
	notification["error"]({
		message: 'Error',
		description: error?.response?.data?.message ?? 'Operation Failed',
	});
}
