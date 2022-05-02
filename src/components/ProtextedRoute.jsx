// /orders and /neworder are protected routes

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
export const ProtectedRoute = ({ children }) => {
    const status = useSelector(store => store.isLoggedIn);
    const isAuth = true
    if(!isAuth){
        return < Navigate to="/login" />
    }
    return children;
};
