import {useDispatch} from "react-redux";
import {login} from "../../services/auth/authSlice";
import {Button} from "antd";
import {showErrorNotification} from "../../components/notification";
import { useNavigate } from "react-router-dom";

export const LoginView = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const onLogin = () => {
        dispatch(login({
            username: "user1",
            password: "password"
        }))
            .unwrap()
            .then((res) => {
                console.log("LOGGED IN")
                navigate("/dashboard")
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
