


import { House } from "@phosphor-icons/react";
import React from "react";

export default function Aside() {
    return (
        <>
            <div className="py-5 w-1/5 bg-slate-7 h-screen text-whit border-r-zinc-300 border-r-8 bg-white">
                <ul className="">
                    <li className="flex items-center gap-1 bg-zinc-300 p-3 px-5">
                        <span>
                            <House size={32} />
                        </span>
                        Inicio
                    </li>
                    <li className="flex items-center gap-1 bg-zinc-300 p-3 px-5">
                        <span>
                            <House size={32} />
                        </span>
                        Inicio
                    </li>
                    <li className="flex items-center gap-1 bg-zinc-300 p-3 px-5">
                        <span>
                            <House size={32} />
                        </span>
                        Inicio
                    </li>
                    <li className="flex items-center gap-1 bg-zinc-300 p-3 px-5">
                        <span>
                            <House size={32} />
                        </span>
                        Inicio
                    </li>
                </ul>
            </div>
        </>
    );
}
