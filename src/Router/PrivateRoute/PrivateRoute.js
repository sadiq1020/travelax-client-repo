import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <h2 className='text-5xl'>Loading...</h2>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;

// const PrivateRoute = ({ children }) => {
//     const { user, loading } = useContext(AuthContext);
//     const location = useLocation();

    

//     if (loading) {
//         // return (
//         //     <div class="flex justify-center items-center">
//         //         <div class="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0" role="status">
//         //             <span class="visually-hidden">Loading...</span>
//         //         </div>
//         //     </div>
//         // )
//         // <h2 className='text-5xl'>Loading...</h2>
//         return <h2 className='text-5xl'>Loading...</h2>
//         // <button className="btn loading">loading</button>

//     }

//     if (user) {
//         return children;
//     }
//     return <Navigate to="/login" state={{ from: location }} replace></Navigate>
// };

// export default PrivateRoute;