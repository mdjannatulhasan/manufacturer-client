import React, { useEffect, useReducer, useRef, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import purchaseBg from "./../../image/purchase-bg.jpeg";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

function Purchase() {
    const [totalPrice, setTotalPrice] = useState(0);
    const { _id } = useParams();

    const [product, setProduct] = useState({ name: "", price: "", quantity: "", desc: "", supplier: "", image: "" });

    const [product_quantity, setProduct_quantity] = useState();
    const { isLoading, error, data } = useQuery("repoData", () => fetch(`${process.env.REACT_APP_SERVER_URL}/product/${_id}`).then((res) => res.json()));
    useEffect(() => {
        const getProduct = async () => {
            setProduct(data);
            setProduct_quantity(data.quantity);
        };
        getProduct();
    }, [data]);

    let productName = product?.name;
    let productPrice = product?.price;
    let productQuantity = product?.quantity;
    let productDesc = product?.desc;
    let productSupplier = product?.supplier;
    let productImage = product?.image;

    const updateProduct = (product) => {
        const setProduct1 = async () => {
            const { data } = await axios.post(`${process.env.REACT_APP_SERVER_URL}/add-product`, product, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            });

            if (data.success) {
                toast.success("Product Updated");
            } else {
                toast.error("Failed to update product");
            }
        };
        setProduct1();
    };
    const quantityUpdate = (updatedQuantity) => {
        const { quantity, ...rest } = product;
        const newProduct = { quantity: updatedQuantity, ...rest };
        setProduct(newProduct);
    };
    const stockRef = useRef();
    const handleSubmit = (event) => {
        event.preventDefault();
        const formProduct = { name: productName, price: productPrice, quantity: productQuantity, desc: productDesc };

        updateProduct(formProduct);
    };
    const handleSubmitStock = (event) => {
        event.preventDefault();
        const totalQuantity = parseInt(productQuantity) + parseInt(event.target.stock.value);
        const formProduct = { name: productName, price: productPrice, quantity: totalQuantity, desc: productDesc };
        quantityUpdate(totalQuantity);
        updateProduct(formProduct);
    };
    const handleReduceStock = () => {
        const totalQuantity = parseInt(productQuantity) - 1;
        const formProduct = { name: productName, price: productPrice, quantity: totalQuantity, desc: productDesc };
        quantityUpdate(totalQuantity);
        updateProduct(formProduct);
    };
    const handleNameChange = (event) => {
        const { name, ...rest } = product;
        const newProduct = { name: event.target.value, ...rest };
        setProduct(newProduct);
    };
    const handlePriceChange = (event) => {
        const { price, ...rest } = product;
        const newProduct = { price: event.target.value, ...rest };
        setProduct(newProduct);
    };
    const handleQuantityChange = (event) => {
        quantityUpdate(event.target.value);
    };
    const handleDescChange = (event) => {
        const { desc, ...rest } = product;
        const newProduct = { desc: event.target.value, ...rest };
        setProduct(newProduct);
    };
    const handleSupplierChange = (event) => {
        const { supplier, ...rest } = product;
        const newProduct = { supplier: event.target.value, ...rest };
        setProduct(newProduct);
    };
    const handleImageChange = (event) => {
        const { image, ...rest } = product;
        const newProduct = { image: event.target.value, ...rest };
        console.log(newProduct.image);
        setProduct(newProduct);
    };
    if (isLoading) {
        return "Loading...";
    }

    if (error) {
        return "An error has occurred: " + error.message;
    }

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
                                <p>Product price: ${data?.price}/unit</p>
                                <p>Minimum Order Quantity: ${data?.orderQuantity}/unit</p>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <input className="border py-1 px-3 w-full" value={productName} type="text" placeholder="Product Name" onChange={handleNameChange} disabled />
                                    <br />
                                    <input className="border py-1 px-3 w-full" onChange={handlePriceChange} value={productPrice} type="number" placeholder="Product Price" disabled />
                                    <br />
                                    <input className="border py-1 px-3 w-full" value={productQuantity} type="number" placeholder="Product Quantity" onChange={handleQuantityChange} required />
                                    <br />

                                    <input className="border py-1 px-3 w-full" value={productSupplier} type="text" placeholder="Supplier Name" onChange={handleSupplierChange} required />
                                    <br />
                                    <textarea className="border py-1 px-3 w-full" onChange={handleDescChange} value={productDesc} placeholder="Product Description"></textarea>
                                    <br />
                                    <textarea className="border py-1 px-3 w-full" onChange={handleImageChange} value={productImage} placeholder="Product Description"></textarea>
                                    <br />
                                    <input className="border px-7 py-2 bg-blue-400 cursor-pointer" type="submit" value="Update Product" />
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
