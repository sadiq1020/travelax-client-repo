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
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg> */}
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            user?.email &&
                            <>
                                <li><Link to="/addservices">Add Services</Link></li>
                                <li><Link to="/myreviews">My reviews</Link></li>
                            </>
                        }
                        <li><Link to="/blogs">Blogs</Link></li>
                        {/* <li tabIndex={0}>
                            <Link className="justify-between">
                                Services
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </Link>
                            <ul className="p-2 bg-gray-700">
                                <li><Link>Submenu 1</Link></li>
                                <li><Link>Submenu 2</Link></li>
                                <li><Link>Submenu 3</Link></li>
                                <li><Link>Submenu 4</Link></li>
                                <li><Link>Submenu 5</Link></li>
                                <li><Link>Submenu 6</Link></li>
                            </ul>
                        </li> */}
                        <li className='font-semibold'><Link to="/login">Log in</Link></li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">

                    <img className='w-14' src={logo} alt="" />
                    Travelax
                </Link>
                {/* <p>Travel Relax Everywhere</p> */}
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {
                        user?.email &&
                        <>
                            <li><Link to="/addservices">Add Services</Link></li>
                            <li><Link to="/myreviews">My reviews</Link></li>
                        </>
                    }
                    <li><Link to="/blogs">Blogs</Link></li>
                    {/* <li tabIndex={0}>
                        <Link>
                            Services
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </Link>
                        <ul className="p-2 z-10 bg-gray-700">
                            <li><Link>Submenu 1</Link></li>
                            <li><Link>Submenu 2</Link></li>
                            <li><Link>Submenu 3</Link></li>
                            <li><Link>Submenu 4</Link></li>
                            <li><Link>Submenu 5</Link></li>
                            <li><Link>Submenu 6</Link></li>
                        </ul>
                    </li> */}

                    {/* <li className='font-semibold'><Link to="/login">Log in</Link></li> */}
                </ul>
            </div>
            <div className="navbar-end">
                {user?.email ?
                    <>
                        <button onClick={handleLogOut} className='btn btn-outline btn-success'>Sign out</button>
                    </>
                    :
                    <Link to="/login"><button className='btn btn-outline btn-primary'>Log in</button></Link>
                }
            </div>
        </div>
    );
};

export default Header;