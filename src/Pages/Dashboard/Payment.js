import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe("pk_test_51L4SOSCYehLpiNhJlDZ4XdEVtLtc3TodeX7WNWWbyFdiTFeMmWjrg3Zl4hGMw79FY9pWJfX7FaAKdAKgLqdLyhFq001kImNU2k");
const Payment = () => {
    const { id } = useParams();
    const [order, SetOrder] = useState([]);
    useEffect(() => {
        const getOrders = async () => {
            const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/myorders/${id}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            });
            SetOrder(data);
        };
        getOrders();
    }, []);
    return (
        <section>
            <div className="container">
                <h3>
                    Order Item Name: <span className="text-xl font-medium">{order?.productName}</span>
                </h3>
                <h3>
                    Order Item Quantity: <span className="text-xl font-medium">{order?.quantity}</span>
                </h3>
                <h3>
                    Order Price: <span className="text-xl font-medium"> ${order?.price}</span>
                </h3>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </section>
    );
};

export default Payment;
