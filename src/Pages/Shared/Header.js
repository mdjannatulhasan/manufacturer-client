import React from "react";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const menuItems = [<Link to="/">Home</Link>, <Link to="/blogs">Blogs</Link>, <Link to="/my-portfolio">My Portfolio</Link>];
    return (
        <header className="container">
            <div className="navbar bg-base-100">
                <div className="navbar-start w-full lg:w-1/2">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 w-52">
                            {menuItems.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                            {user ? (
                                <>
                                    <span onClick={() => signOut(auth)}>Sign Out</span>
                                </>
                            ) : (
                                <>
                                    <Link to="/register">Register</Link>
                                    <Link to="/login">Login</Link>
                                </>
                            )}
                        </ul>
                    </div>
                    <Link to="/" className="grow brand font-bold text-xl flex flex-row-reverse lg:flex-row lg:space-x-3 items-center text-right lg:text-left">
                        <figure>
                            <img src="/icon.png" width="60" alt="" />
                        </figure>
                        <span className="inline-block mr-2 lg:mr-0">
                            Hasan Manufacturing <br />
                            Industry
                        </span>
                    </Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems.map((item, index) => (
                            <li key={index} className="font-semibold hover:text-primary">
                                {item}
                            </li>
                        ))}
                        {user ? (
                            <li className="font-semibold hover:text-primary">
                                <span onClick={() => signOut(auth)}>Sign Out</span>
                            </li>
                        ) : (
                            <>
                                <li className="font-semibold hover:text-primary">
                                    <Link to="/register">Register</Link>
                                </li>
                                <li className="font-semibold hover:text-primary">
                                    <Link to="/login">Login</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
