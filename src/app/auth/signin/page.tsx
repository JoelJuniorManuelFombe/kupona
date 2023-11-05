"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { createUser } from "@/services/auth";

type TUserNew = {
    userName: string;
    userEmail: string;
    userContact: number;
    userAddress: string;
    userPassword: string;
};

export default function SignIn() {
    const [msg, setMsg] = useState(false);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<TUserNew>();
    const onSubmit: SubmitHandler<TUserNew> = async (data) => {
        // console.log(data);
        await createUser(data);
        setMsg(true);
    };
    if (msg) {
    }

    return (
        <section>
            <div className="flex">
                <div className="bg-zinc-300 h-screen w-full md:w-1/2 flex flex-col space-y-5 justify-center items-center px-20">
                    <h1 className="text-2xl font-bold">SignIn</h1>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-5"
                    >
                        <div className="space-y-3">
                            <h2>Full Name</h2>
                            <input
                                className="py-2 px-2 outline-none w-96"
                                type="text"
                                id=""
                                placeholder="Enter your name"
                                {...register("userName", {
                                    required: true,
                                    minLength: 5,
                                })}
                            />
                            <br />
                            {errors.userName && (
                                <span className="text-xs text-red-500">
                                    Name is required
                                </span>
                            )}
                        </div>
                        <div className="space-y-3">
                            <h2>Email</h2>
                            <input
                                className="py-2 px-2 outline-none w-96"
                                type="email"
                                id=""
                                placeholder="Enter Password"
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
                            <h2>Contact</h2>
                            <input
                                className="py-2 px-2 outline-none w-96"
                                type="number"
                                id=""
                                placeholder="+258 xxxxxxxxx"
                                {...register("userContact", {
                                    required: true,
                                })}
                            />
                            <br />
                            {errors.userContact && (
                                <span className="text-xs text-red-500">
                                    Contact is required
                                </span>
                            )}
                        </div>
                        <div className="space-y-3">
                            <h2>Address</h2>
                            <input
                                className="py-2 px-2 outline-none w-96"
                                type="text"
                                id=""
                                placeholder="Enter your address"
                                {...register("userAddress", {
                                    required: true,
                                })}
                            />
                            <br />
                            {errors.userAddress && (
                                <span className="text-xs text-red-500">
                                    Address is required
                                </span>
                            )}
                        </div>
                        <div className="space-y-3">
                            <h2>Password</h2>
                            <input
                                className="py-2 px-2 outline-none w-96"
                                type="password"
                                id=""
                                placeholder="Enter Password"
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
                        {/* {msg ? "Done" : ""} */}
                    </form>
                </div>
                <div className="h-screen hidden md:flex md:w-full justify-center bg-image-signin bg-cover bg-center">
                    <span className="text-5xl font-bold pt-40 text-center">
                        Be the Change: Connect to Donate.
                    </span>
                </div>
            </div>
        </section>
    );
}
