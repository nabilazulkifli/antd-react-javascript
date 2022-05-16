import {useDispatch} from "react-redux";
import {login} from "../../services/auth/authSlice";
import {Button} from "antd";
import {showErrorNotification} from "../../components/notification";

export const LoginView = () => {

    const dispatch = useDispatch();

    const onLogin = () => {
        dispatch(login({
            username: "xxx",
            password: "xxx"
        }))
            .unwrap()
            .then((res) => {
                console.log("LOGGED IN")
            })
            .catch((error) => {
                showErrorNotification(error)
                console.log("ERROR")
            })
            .finally(() => {
                console.log("FINALLY")
            })
    }

    return (
        <>
            <h1>Login Page</h1>
            <Button onClick={onLogin}>Login</Button>
        </>
    )
}
