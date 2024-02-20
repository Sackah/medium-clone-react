import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {AuthProps} from '../types/auth.types';
import {useSelector} from "react-redux";
import {RootState} from "../store/store";

const AuthGuard = ({children}: AuthProps) => {
    const user = useSelector((state: RootState)=> state.user);
    const isLoggedIn = user.isLoggedIn;
    const navigate = useNavigate();

    useEffect(()=>{
        const isLoggedIn = user.isLoggedIn;
        if(!isLoggedIn){
            navigate('/login')
        }
    },[navigate, user.isLoggedIn])

    return isLoggedIn ? <>{children}</> : null;
}

export default  AuthGuard;
