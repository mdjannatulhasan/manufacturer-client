import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Register = () => {
    const [pwMismatch, setPwMismatch] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        if (data?.password !== data?.retypePassword) {
            setPwMismatch(true);
        } else {
            setPwMismatch(false);
        }
    };
    return (
        <div className="bg-slate-100">
            <div className="container text-center pt-12 pb-20">
                <div className="border max-w-lg mx-auto pt-9 pb-12 px-12 shadow-lg bg-white">
                    <h1 className="text-accent text-4xl font-bold mb-9">Please Register Here</h1>
                    <form className="grid grid-cols-1 mt-5 space-y-3 " onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" className="input input-bordered rounded-none w-full" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                        {errors.email && <span>Please enter a valid email</span>}
                        <input type="password" className="input input-bordered rounded-none w-full" placeholder="Password" {...register("password", { required: true })} />
                        {errors.password && <span>This field is required</span>}
                        <input type="password" className="input input-bordered rounded-none w-full" placeholder="Type password again" {...register("retypePassword", { required: true })} />
                        {pwMismatch ? <p className="text-rose-500">Password mismatch</p> : ""}
                        <input className="hover:cursor-pointer bg-primary text-white font-semibold py-2" type="submit" value="Register" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
