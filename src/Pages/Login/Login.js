import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <div className="bg-slate-100">
            <div className="container text-center pt-12 pb-20">
                <div className="bg-white shadow-lg border max-w-lg mx-auto pt-9 pb-12 px-12">
                    <h1 className="text-accent text-4xl font-bold mb-9">Please Login</h1>
                    <form className="grid grid-cols-1 mt-5 space-y-3 " onSubmit={handleSubmit(onSubmit)}>
                        <input className="input input-bordered rounded-none w-full" placeholder="Email" {...register("email", { required: true })} />
                        {errors.email && <span>This field is required</span>}
                        <input className="input input-bordered rounded-none w-full" placeholder="Password" {...register("password", { required: true })} />
                        {errors.password && <span>This field is required</span>}

                        <input className="bg-primary text-white font-semibold py-2" type="submit" value="Login" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
