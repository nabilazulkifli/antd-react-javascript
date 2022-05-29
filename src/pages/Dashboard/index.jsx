import "./index.less"
import {useDispatch, useSelector} from "react-redux";
import {getUsersList} from "../../services/users/usersSlice";
import {useEffect} from "react";
import {showErrorNotification} from "../../components/notification";

export const DashboardView = () => {

    const dispatch = useDispatch()
    const { usersList } = useSelector(state => state.users)

    useEffect(() => {
        dispatch(getUsersList())
            .unwrap()
            .then(() => {
                // TODO: Success Logic
            })
            .catch((error) => {
                // TODO: Failure Logic
                showErrorNotification(error)
            })
            .finally(() => {
                // TODO: Hide Loading
            })
    }, [dispatch]);


    return (
        <>
            {/* {
                usersList.data.map((user) => {
                    return (
                        <h1>{ user.username }</h1>
                    )
                })
            } */}
        </>
    )
}
