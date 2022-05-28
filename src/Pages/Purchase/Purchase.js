import React, { useEffect, useReducer, useRef, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import purchaseBg from "./../../image/purchase-bg.jpeg";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

function Purchase() {
    const [user] = useAuthState(auth);

    const [totalPrice, setTotalPrice] = useState(0);
    const { _id } = useParams();
    const [disableSubmit, setDisableSubmit] = useState(false);
    const { isLoading, error, data } = useQuery("repoData", async () => await fetch(`${process.env.REACT_APP_SERVER_URL}/product/${_id}`).then((res) => res.json()));

    const [order, setOrder] = useState({
        productId: _id,
        username: user.displayName,
        email: user.email,
        contact: "",
        productName: "",
        price: "",
        quantity: "",
        address: "",
        status: "Unpaid",
        instruction: "",
    });

    useEffect(() => {
        const { productName, quantity, price, ...rest } = order;
        const productname = data?.name;
        const productquantity = data?.orderQuantity;
        const newOrder = { productName: productname, quantity: productquantity, price: data?.price * productquantity, ...rest };
        setOrder(newOrder);
    }, [data]);

    if (isLoading) {
        return "Loading...";
    }

    if (error) {
        return "An error has occurred: " + error.message;
    }
    let product = data?.name;
    let userName = user?.displayName;
    let userEmail = user?.email;

    let orderItemQuantity = order?.quantity || data?.orderQuantity;
    let address = order?.address;
    let contact = order?.contact;
    let instruction = order?.instruction;

    const placeNewOrder = (order) => {
        const placeOrder = async () => {
            const { data } = await axios.post(`${process.env.REACT_APP_SERVER_URL}/placeorder`, order, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            });

            if (data.success) {
                toast.success("Order Placed");
            } else {
                toast.error("Failed to place order");
            }
        };
        placeOrder();
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        placeNewOrder(order);
        setOrder({
            productId: _id,
            username: user.displayName,
            email: user.email,
            contact: "",
            productName: "",
            price: "",
            quantity: "",
            address: "",
            status: "Unpaid",
            instruction: "",
        });
    };
    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value);
        const minQuantity = data?.orderQuantity;
        const maxQuantity = data?.stock;
        if (newQuantity > maxQuantity) {
            setDisableSubmit(true);
            toast.error(`Order quantity exceeds avaiable stock.`);
        } else if (newQuantity < minQuantity) {
            setDisableSubmit(true);
            toast.error(`Please order more than ${minQuantity} unit`);
        } else {
            setDisableSubmit(false);
        }
        const { quantity, ...rest } = order;
        const newOrder = { quantity: newQuantity, ...rest };
        setOrder(newOrder);
    };
    const handleInstructionChange = (event) => {
        const { instruction, ...rest } = order;
        const newOrder = { instruction: event.target.value, ...rest };
        setOrder(newOrder);
    };
    const handleNameChange = (event) => {
        const { productName, ...rest } = order;
        const newOrder = { productName: event.target.value, ...rest };
        setOrder(newOrder);
    };
    const handleAddressChange = (event) => {
        const { address, ...rest } = order;
        const newOrder = { address: event.target.value, ...rest };
        setOrder(newOrder);
    };
    const handleContactChange = (event) => {
        const { contact, ...rest } = order;
        const newOrder = { contact: event.target.value, ...rest };
        setOrder(newOrder);
    };

    return (
        <>
            <section
                className=""
                style={{
                    background: `url(${purchaseBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="backdrop-blur-md bg-accent/30 py-10 lg:py-16">
                    <div className="container">
                        <div className=" max-w-fit mx-auto py-4 px-10">
                            <h1 className="font-bold text-white text-4xl">Please complete your purchase</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16">
                <div className="container">
                    <div className="p-8 shadow">
                        <div className="flex lg:gap-20">
                            <h3 className="text-2xl">
                                Order of <strong className="text-[#7f2325]">{data?.name}</strong>
                            </h3>
                            <h3 className="text-2xl font-bold">
                                Total: <strong className="text-[#7f2325]">${totalPrice || data.orderQuantity * data.price}</strong>
                            </h3>
                        </div>
                        <div className="grid lg:grid-cols-2 items-center mt-5">
                            <div>
                                <div className="space-y-2">
                                    <p className="">
                                        <span> Product price:</span> <strong className="text-[22px]">${data?.price}</strong>/unit
                                    </p>
                                    <p className="">
                                        <span> Minimum Order Quantity:</span> <strong className="text-[22px]">{data?.orderQuantity}</strong> unit
                                    </p>
                                    <p className="">
                                        <span> Available stock:</span> <strong className="text-[22px]">{data?.stock}</strong> unit
                                    </p>
                                    <p>
                                        <span>Description:</span> {data?.description}
                                    </p>
                                </div>
                                <form id="orderForm" onSubmit={handleSubmit} className="mt-3">
                                    <label htmlFor="userName" className="font-bold pt-2 inline-block pb-1">
                                        Your Name:
                                    </label>
                                    <input id="userName" className="border py-1 px-3 mb-4 w-full" value={userName} type="text" placeholder="Your Name" disabled />
                                    <br />
                                    <label htmlFor="email" className="font-bold pt-2 inline-block pb-1">
                                        Your Email:
                                    </label>
                                    <input id="email" className="border py-1 px-3 mb-4 w-full" value={userEmail} type="email" placeholder="Your Email" disabled />
                                    <br />
                                    <input id="name" className="border py-1 px-3 w-full" value={product} type="text" onChange={handleNameChange} hidden placeholder="Product Name" disabled />
                                    <label htmlFor="quantity" className="font-bold inline-block pb-1">
                                        Order Quantity:
                                    </label>
                                    <input
                                        id="quantity"
                                        className="border py-1 px-3 w-full mb-4"
                                        value={orderItemQuantity}
                                        type="number"
                                        placeholder="Order Quantity"
                                        onChange={handleQuantityChange}
                                        required
                                    />
                                    <br />
                                    <label htmlFor="phone" className="font-bold pt-2 inline-block pb-1">
                                        Your Contact Number:
                                    </label>
                                    <input id="email" className="border py-1 px-3 mb-4 w-full" value={contact} type="text" placeholder="Your Contact" onChange={handleContactChange} />
                                    <br />
                                    <label htmlFor="address" className="font-bold pt-2 inline-block pb-1">
                                        Your Address:
                                    </label>
                                    <input id="address" className="border py-1 px-3 mb-4 w-full" value={address} type="text" placeholder="Your address" onChange={handleAddressChange} />
                                    <br />
                                    <label htmlFor="instruction" className="font-bold inline-block pb-1">
                                        Special Instruction:
                                    </label>
                                    <textarea
                                        id="instruction"
                                        className="border py-1 px-3 w-full mb-4"
                                        onChange={handleInstructionChange}
                                        value={instruction}
                                        placeholder="Product Description"
                                    ></textarea>
                                    <br />
                                    <input
                                        className="border px-7 py-2 bg-primary cursor-pointer disabled:bg-slate-300 text-white font-bold disabled:text-accent disabled:cursor-not-allowed"
                                        type="submit"
                                        value="Place Order"
                                        disabled={disableSubmit}
                                    />
                                </form>
                            </div>

                            <div>
                                <figure>
                                    <img src={data?.image} className="max-h-96 mx-auto" alt="" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Purchase;
