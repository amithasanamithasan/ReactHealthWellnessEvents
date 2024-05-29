import { useContext } from "react";
import { Authcontext } from "../../providers/AuthProvider";
import { Navigate } from "react-router-dom";



const PrivateRoute = ({children}) => {

const {user ,loading}=useContext(Authcontext)
if(loading){
    return <span className="loading loading-dots loading-lg"></span>
}

if(user){
    return children
}
    return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;