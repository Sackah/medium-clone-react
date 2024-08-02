import { AuthProps } from "../types/auth.types";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function LoginGuard({ children }: AuthProps) {
    const user = useSelector((state: RootState) => state.user);
    const isLoggedIn = user.isLoggedIn;
    const navigate = useNavigate();

    useEffect(() => {
        const isLoggedIn = user.isLoggedIn;
        if (isLoggedIn) {
            navigate("/");
        }
    }, [navigate, user.isLoggedIn]);

    return !isLoggedIn ? <>{children}</> : null;
}
