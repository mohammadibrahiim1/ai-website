import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/Context';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(user);

    if(loading){
        return <div class="spinner-grow text-danger" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    };

    if(!user){
        return <Navigate to="/signin" state={{from:location}} replace></Navigate>
    }
    return  children;
};

export default PrivateRoute;