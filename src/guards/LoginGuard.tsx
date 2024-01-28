import {AuthProps} from "../types/auth.types";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../store/store";


const LoginGuard = ({children}: AuthProps) => {
    const user = useSelector((state: RootState)=> state.user);
    const isLoggedIn = user.isLoggedIn;
    const navigate = useNavigate();

    useEffect(() => {
        const isLoggedIn = user.isLoggedIn;
        if(isLoggedIn){
            navigate("/");
        }
    }, []);

    return !isLoggedIn ? <>{children}</> : null;
}

export default LoginGuard;