import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <>
            <div className="grid grid-cols-12">
                <div className="col-span-3 bg-slate-200 py-10 px-6 shadow-md">
                    <button className="btn btn-wide text-white hover:cursor-default disabled:bg-[#303640] disabled:text-white" disabled>
                        Dashboard
                    </button>
                    <ul className="space-y-6 pt-5 ml-7">
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
                <div className="col-span-9">
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
