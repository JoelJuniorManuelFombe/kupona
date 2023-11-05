"use client";
import CardPublication from "@/components/Cards/CardPublication";
import { PrivateRoute } from "../middleware/middleware";
import React from "react";

export default function Dashboard() {
    return (
        <>
            <div className="pt-5 px-10 w-full h-full flex mx-auto">
                <div className="flex gap-5 flex-wrap py-5">
                    <CardPublication />
                    <CardPublication />
                    <CardPublication />
                    <CardPublication />
                    <CardPublication />
                    <CardPublication />
                    <CardPublication />
                    <CardPublication />
                </div>
                <div className="bg-blue-600 w-1/2">
                  kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
                </div>
            </div>
        </>
    );
}
