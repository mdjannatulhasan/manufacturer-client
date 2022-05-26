import React from "react";
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
        </>
    );
}

export default AllProducts;
