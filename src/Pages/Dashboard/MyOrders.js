import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [orders, SetOrders] = useState([]);
    useEffect(() => {
        const getOrders = async () => {
            const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/myorders?email=${user?.email}`);
            SetOrders(data);
        };
        getOrders();
    }, []);
    return (
        <section className="bg-slate-100 pb-16 pt-10">
            <div className="container">
                <h2 className="text-2xl font-semibold">My orders</h2>
            </div>
        </section>
    );
};

export default MyOrders;
