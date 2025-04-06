import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import Loader from "../Loader/Loader";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if(user){
        return children;
    }
    if(loading){
        return <Loader></Loader>
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;