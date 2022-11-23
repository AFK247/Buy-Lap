import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

//Private Route
const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    //loading spinner
    if (loading) {
        console.log("loading er vitor");
         return <div class="d-flex justify-content-center">
         <div class="spinner-border" role="status">
             <span class="visually-hidden">Loading</span>
         </div>
     </div>
         
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;