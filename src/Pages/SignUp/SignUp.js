import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider'
import useTitle from '../../hooks/useTitle';
import { Oval } from 'react-loader-spinner';
import GoogleLogIn from '../Login/GoogleLogIn';

const SignUp = () => {
    const { createUser, updateUserProfile, loading } = useContext(AuthContext);

    useTitle('Sign up');

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    if (loading) {
        return (
            <div className='flex justify-center'>
                <Oval
                    height="80"
                    width="80"
                    radius="9"
                    color="#00FFFF"
                    ariaLabel="loading"
                    wrapperStyle
                    wrapperClass
                />
            </div>
        )
    }

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        // sign up
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();

                handleUpdateUerProfile(name, photoURL)

                navigate(from, { replace: true })
            })
    }


    // for update user profile
    const handleUpdateUerProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(e => console.error(e));
    }

    return (
        <div className="hero min-h-screen bg-base-300">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-right">
                    <h1 className="text-5xl font-bold">Register</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photoURL' placeholder="photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <GoogleLogIn></GoogleLogIn>
                    <p className='text-center pb-5 mt-3'>Already have an account? <Link className='text-teal-400' to="/login">Log In</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;