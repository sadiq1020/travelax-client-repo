import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import { Oval } from 'react-loader-spinner';
import GoogleLogIn from './GoogleLogIn';

const Login = () => {
    const { login, loading } = useContext(AuthContext);
    useTitle('Login');

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

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                const currentUser = {
                    email: user.email
                }

                // get jwt token
                fetch('https://assignment-eleven-server-one.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);

                        localStorage.setItem('travelax-token', data.token);
                    })
                navigate(from, { replace: true })
            })
            .catch(err => console.error(err));
    }

    return (
        <div className="hero min-h-screen bg-base-300">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-right">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
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
                            <input className="btn btn-primary" type="submit" value="login" />
                        </div>
                    </form>
                    <GoogleLogIn></GoogleLogIn>
                    <p className='text-center pb-5 mt-3'>New to Travelax? <Link className='text-teal-400' to="/signup">Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;