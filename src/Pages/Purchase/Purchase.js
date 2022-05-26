import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import AddProduct from "../Product/AddProduct";
import purchaseBg from "./../../image/purchase-bg.jpeg";
function Purchase() {
    const [totalPrice, setTotalPrice] = useState(0);
    const { _id } = useParams();
    const { isLoading, error, data } = useQuery("repoData", () => fetch(`${process.env.REACT_APP_SERVER_URL}/product/${_id}`).then((res) => res.json()));

    if (isLoading) return "Loading...";

    if (error) return "An error has occurred: " + error.message;
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
                                Total: <strong className="text-[#7f2325]">${totalPrice}</strong>
                            </h3>
                        </div>
                        <div className="grid grid-cols-2 mt-5">
                            <div>
                                <p>Product price: ${data?.price}/unit</p>
                                <p>Minimum Order Quantity: ${data?.orderQuantity}/unit</p>
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
