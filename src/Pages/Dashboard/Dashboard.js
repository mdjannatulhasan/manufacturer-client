import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <>
            <div class="drawer drawer-mobile h-full">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <label for="my-drawer-2" class=" bg-slate-100 hover:bg-slate-100 btn w-full text-left text-accent border-none drawer-button flex justify-start px-10 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                        <span className="ml-2">Sidebar </span>
                    </label>
                    <Outlet></Outlet>
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-slate-200 text-base-content">
                        <button class="btn text-white hover:cursor-default disabled:bg-[#303640] disabled:text-white mt-5" disabled="">
                            Dashboard
                        </button>
                        <li>
                            <Link to="" className="flex items-center font-semibold">
                                <i className="fas fa-address-card text-2xl mr-3"></i> <span> My Profile</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="my-orders" className="flex items-center font-semibold">
                                <i className="fas fa-boxes text-2xl mr-3"></i> <span> My orders</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="add-review" className="flex items-center font-semibold">
                                <i className="fas fa-star text-2xl mr-3"></i> <span> Add a review</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="my-orders" className="flex items-center font-semibold">
                                <i className="fas fa-boxes text-2xl mr-3"></i> <span> My orders</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
