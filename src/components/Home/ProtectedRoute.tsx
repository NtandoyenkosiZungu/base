import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../Contexts/auth/AuthContext";

export const PrivateRoutes = () => {
    const { token } = useAuth(); // Access the token from AuthContext
    return (
        token? <Outlet /> : <Navigate to="/login" /> // Redirect to login if no token
    );
};