"use client";
import Aside from "@/components/aside/Aside";
import DashNavBar from "@/components/navbar/DashNavBar";
import React, { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
    return (
        <>
            <DashNavBar />
            <div className="flex">
                <Aside />
                <div>{children}</div>
            </div>
        </>
    );
}
