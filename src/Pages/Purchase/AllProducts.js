import React from "react";
import { Link } from "react-router-dom";
import GetProducts from "../Shared/GetProducts";
import purchaseBg from "./../../image/purchase-bg.jpeg";

function AllProducts() {
    const [products, setProducts, loading, setLoading] = GetProducts();

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
                            <h1 className="font-bold text-white text-4xl">Tools We Manufacture</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="lg:py-16 py-10">
                <div className="container">
                    <div className="grid lg:gap-8 gap-y-8 gap-x-0 grid-cols-1 lg:grid-cols-3">
                        {products.map((product) => (
                            <div key={product._id} className="">
                                <div className="py-14 px-5 bg-white shadow-lg">
                                    <figure className="mb-5">
                                        <img className="mx-auto" src={product.image} style={{ maxHeight: "200px" }} alt="" />
                                    </figure>
                                    <h4 className="text-xl font-bold text-accent mb-4">{product.name}</h4>
                                    <p className="pb-1">
                                        Minimum order quantity: <span className="text-lg font-bold">{product.orderQuantity}pcs</span>
                                    </p>
                                    <p className="pb-1">
                                        Available Stock: <span className="text-lg font-bold">{product.stock}pcs</span>
                                    </p>
                                    <p className="pb-1">
                                        Per unit price: <span className="text-lg font-bold">{product.price}$</span>
                                    </p>
                                    <p className="pb-5">{product.description}</p>
                                    <Link className="bg-primary text-white text-center block py-1" to={`/purchase/${product._id}`}>
                                        Order Now
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default AllProducts;
