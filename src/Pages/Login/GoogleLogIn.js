import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const GoogleLogIn = () => {
    const { googleSignIn } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);

                navigate(from, { replace: true })
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <p className='text-center'>
                <button onClick={handleGoogleSignIn} className='btn btn-outline btn-primary'>Google</button>
            </p>
        </div>
    );
};

export default GoogleLogIn;