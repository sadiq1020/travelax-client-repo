import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import logo from '../../../assets/images/logo.png'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    return (
        <div className="navbar bg-base-100 mt-5 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg> */}
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/allservices">All Services</Link></li>
                        {
                            user?.email &&
                            <>
                                <li><Link to="/addservices">Add Services</Link></li>
                                <li><Link to="/myreviews">My reviews</Link></li>
                            </>
                        }
                        <li><Link to="/blog">Blogs</Link></li>
                        <li className='font-semibold'><Link to="/login">Log in</Link></li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">

                    <img className='w-14' src={logo} alt="" />
                    Travelax <span className='text-sm ml-2'>Travel Relax</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to="/allservices">All Services</Link></li>
                    {
                        user?.email &&
                        <>
                            <li><Link to="/addservices">Add Services</Link></li>
                            <li><Link to="/myreviews">My reviews</Link></li>
                        </>
                    }
                    <li><Link to="/blog">Blogs</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                {user?.email ?
                    <>
                        <p className='mr-5'>{user.displayName}</p>
                        <button onClick={handleLogOut} className='btn btn-outline btn-primary'>Sign out</button>
                    </>
                    :
                    <Link to="/login"><button className='btn btn-outline btn-primary'>Log in</button></Link>
                }
            </div>
        </div>
    );
};

export default Header;