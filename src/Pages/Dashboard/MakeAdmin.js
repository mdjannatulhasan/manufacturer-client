import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [users, setUsers] = useState([]);
    const [userAdminEmail, setUserAdminEmail] = useState("");
    useEffect(() => {
        const setUsersArray = async () => {
            const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/users`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            });
            setUsers(data);
        };
        setUsersArray();
    }, []);

    const handleAdmin = (userAdminEmail, refetch) => {
        const postUserInfo = async () => {
            const { data } = await axios.put(`${process.env.REACT_APP_SERVER_URL}/makeadmin/${userAdminEmail}`, userAdminEmail, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            });

            if (data?.acknowledged) {
                toast.info("Admin Added successfully");
                refetch();
            } else {
                toast.error("Failed to make admin");
            }
        };
        postUserInfo();
    };
    return (
        <section className="bg-slate-100 pb-16 pt-10">
            <div className="container">
                <h2 className="text-2xl font-semibold">User List</h2>

                <div className="overflow-x-auto mt-4">
                    <table className="table table-compact w-full">
                        <thead className="bg-slate-200">
                            <tr>
                                <td>ID</td>
                                <td>Email</td>
                                <td>Name</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((singleUser) => (
                                <tr key={singleUser?._id}>
                                    <td>{singleUser?._id}</td>
                                    <td>{singleUser?.email}</td>
                                    <td>{singleUser?.displayName}</td>
                                    <td className="space-x-2">
                                        {singleUser?.role !== "admin" ? (
                                            <>
                                                <label
                                                    className="cursor-pointer bg-slate-300 py-1 px-3"
                                                    onClick={() => {
                                                        setUserAdminEmail(singleUser?.email);
                                                    }}
                                                    htmlFor="deleteItem"
                                                >
                                                    Make admin
                                                </label>
                                                <button className="bg-slate-300 py-1 px-3">Delete User</button>
                                            </>
                                        ) : (
                                            ""
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <input type="checkbox" id="deleteItem" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Are you sure you want to add an admin:</h3>
                            <p className="py-4">{userAdminEmail} will be admin</p>
                            <div className="modal-action">
                                <label htmlFor="deleteItem" onClick={() => handleAdmin(userAdminEmail)} className="btn">
                                    Yes
                                </label>
                                <label htmlFor="deleteItem" className="btn">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyOrders;
