import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {AuthProps} from '../types/auth.types';

const AuthGuard = ({children}: AuthProps) => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    useEffect(()=>{
        const token = localStorage.getItem("token");
        if(!token){
            navigate('/login')
        }
    },[])

    return token ? <>{children}</> : null;
}

export default  AuthGuard;
