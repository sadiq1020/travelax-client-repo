import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (<div className='flex justify-center'>
            <Oval
                height="80"
                width="80"
                radius="9"
                color="#00FFFF"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
            />
        </div>)
        // <h2 className='text-5xl'>Loading...</h2>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;
