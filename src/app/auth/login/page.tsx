"use client";
/* eslint-disable @next/next/no-img-element */
import { login } from "@/services/auth";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type TUser = {
    userEmail: string;
    userPassword: string;
};

export default function SignIn() {
    const [msg, setMsg] = useState(false);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<TUser>();
    const onSubmit: SubmitHandler<TUser> = async (data) => {
        console.log(data);
        await login(data);
        setMsg(true);
    };

    return (
        <section>
            <div className="flex">
                <div className="bg-zinc-300 h-screen w-full md:w-1/2 flex flex-col space-y-5 justify-center items-center px-20">
                    <h1 className="text-2xl font-bold">LogIn</h1>
                    <form
                        className="space-y-5"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="space-y-3">
                            <h2>Email</h2>
                            <input
                                className="py-2 px-2 outline-none w-96"
                                type="email"
                                id=""
                                placeholder="Enter your Email"
                                {...register("userEmail", {
                                    required: true,
                                })}
                            />
                            <br />
                            {errors.userEmail && (
                                <span className="text-xs text-red-500">
                                    Email is required
                                </span>
                            )}
                        </div>
                        <div className="space-y-3">
                            <h2>Password</h2>
                            <input
                                className="py-2 px-2 outline-none w-96"
                                type="text"
                                id=""
                                placeholder="Enter your password"
                                {...register("userPassword", {
                                    required: true,
                                })}
                            />
                            <br />
                            {errors.userPassword && (
                                <span className="text-xs text-red-500">
                                    Password is required
                                </span>
                            )}
                        </div>
                        <div>
                            <button className="bg-blue-400 px-20 py-2 hover:bg-blue-600 outline-none">
                                {msg ? "Done" : "Create"}
                            </button>
                        </div>
                    </form>
                </div>
                <div className="h-screen hidden md:flex md:w-full bg-image-login bg-cover bg-center">
                    <span className="text-7xl font-extrabold pt-40 px-5 w-52 text-blue-700">
                        Your donation can change the world.
                    </span>
                </div>
            </div>
        </section>
    );
}
