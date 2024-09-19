import React from 'react';
import { Navigate } from 'react-router-dom';
import { pipGetAccessToken } from '../Auth/Pip';
import { pageRoutes } from '../Routes/pageRoutes';

const PrivateRoute = ({ children }) => {
    const isAuth = pipGetAccessToken();
    return (
        isAuth ? children : <Navigate to={pageRoutes.login} />
    )
}

export default PrivateRoute;