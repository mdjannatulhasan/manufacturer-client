import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const menuItems = [<Link to="/">Home</Link>, <Link to="/blogs">Blogs</Link>, <Link to="/my-portfolio">My Portfolio</Link>];
    return (
        <header className="container">
            <div className="navbar bg-base-100">
                <div className="navbar-start w-full">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 w-52">
                            {menuItems.map((item) => (
                                <li>{item}</li>
                            ))}
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
                        {menuItems.map((item) => (
                            <li className="font-semibold hover:text-primary">{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
