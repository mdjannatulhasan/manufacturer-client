import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ order }) => {
    console.log(order);
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const { price } = order;

    useEffect(() => {
        const getOrders = async () => {
            const { data } = await axios.post(`${process.env.REACT_APP_SERVER_URL}/create-payment-intent`, order, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            });
            if (data?.clientSecret) {
                setClientSecret(data.clientSecret);
            }
        };
        getOrders();
    }, [price]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });

        setCardError(error?.message || "");
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: "16px",
                                color: "#424770",
                                "::placeholder": {
                                    color: "#aab7c4",
                                },
                            },
                            invalid: {
                                color: "#9e2146",
                            },
                        },
                    }}
                />
                <button type="submit" className="bg-primary text-white py-1 px-3 mt-3" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>

            {cardError && <p className="text-red-500">{cardError}</p>}
        </>
    );
};

export default CheckoutForm;
