import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [orders, SetOrders] = useState([]);
    const [orderId, SetOrderId] = useState("");
    useEffect(() => {
        const getOrders = async () => {
            const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/myorders?email=${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            });
            SetOrders(data);
        };
        getOrders();
    }, []);
    const handleDelete = (_id) => {
        const postUserInfo = async () => {
            const { data } = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/delete/${orderId}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            });
            const newOrders = orders.filter((order) => order._id !== _id);
            SetOrders(newOrders);
            if (data?.acknowledged && data?.deletedCount) {
                toast.info("Order deleted successfully");
            } else {
                toast.error("There's an error occured while deleteing");
            }
        };
        postUserInfo();
        console.log("Deleted");
    };
    return (
        <section className="bg-slate-100 pb-16 pt-10">
            <div className="container">
                <h2 className="text-2xl font-semibold">My orders</h2>

                <div className="overflow-x-auto mt-4">
                    <table className="table table-compact w-full">
                        <thead className="bg-slate-200">
                            <tr>
                                <td>Order ID</td>
                                <td>Item Name</td>
                                <td>Quantity</td>
                                <td>Payment Status</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr key={order._id}>
                                    <td>{order._id}</td>
                                    <td>{order.productName}</td>
                                    <td>{order.quantity}</td>
                                    <td>{order.status}</td>
                                    <td className="space-x-2">
                                        {order.status === "Unpaid" ? (
                                            <>
                                                <button className="bg-slate-300 py-1 px-3">Pay</button>
                                                <label
                                                    className="cursor-pointer bg-slate-300 py-1 px-3"
                                                    onClick={() => {
                                                        SetOrderId(order._id);
                                                    }}
                                                    htmlFor="deleteItem"
                                                >
                                                    Delete
                                                </label>
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
                            <h3 className="font-bold text-lg">Are you sure you want to delete order:</h3>
                            <p className="py-4">{orderId}</p>
                            <div className="modal-action">
                                <label for="deleteItem" onClick={() => handleDelete(orderId)} className="btn">
                                    Yes
                                </label>
                                <label for="deleteItem" className="btn">
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
