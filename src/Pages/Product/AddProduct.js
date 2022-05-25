import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const AddProduct = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {};
    return (
        <div className="bg-slate-100">
            <div className="container text-center pt-12 pb-20">
                <div className="bg-white shadow-lg border max-w-lg mx-auto pt-9 pb-12 px-12">
                    <h1 className="text-accent text-4xl font-bold mb-9">Add a Product</h1>
                    <form className="grid grid-cols-1 mt-5 space-y-3 " onSubmit={handleSubmit(onSubmit)}>
                        <input className="input input-bordered rounded-none w-full" placeholder="Product Name" {...register("name", { required: true })} />
                        {errors.name && <span className="text-rose-600">Product Name is required</span>}

                        <input className="input input-bordered rounded-none w-full" placeholder="Minimum Order Quantity" {...register("orderQuantity", { required: true })} />
                        {errors.orderQuantity && <span className="text-rose-600">Minimum order quantity is required</span>}
                        {errors.name && <span className="text-rose-600">Product Name is required</span>}

                        <input className="input input-bordered rounded-none w-full" placeholder="Product Stock" {...register("stock", { required: true })} />
                        {errors.stock && <span className="text-rose-600">Stock is required</span>}

                        <input className="input input-bordered rounded-none w-full" placeholder="Product Price (Single Unit)" {...register("price", { required: true })} />
                        {errors.price && <span className="text-rose-600">Price is required</span>}

                        <input className="input input-bordered rounded-none w-full" placeholder="Product Image URL" {...register("image", { required: true })} />
                        {errors.image && <span className="text-rose-600">Image URL is required</span>}

                        <textarea rows="3" className="textarea input-bordered rounded-none w-full" placeholder="Product Description" {...register("description", { required: true })} />
                        {errors.description && <span className="text-rose-600">Description is required</span>}

                        <input className="bg-primary hover:cursor-pointer text-white font-semibold py-2" type="submit" value="Add Product" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
