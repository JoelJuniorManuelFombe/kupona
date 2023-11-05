/* eslint-disable @next/next/no-img-element */


import { Plus } from "@phosphor-icons/react";
import React from "react";

export default function DashNavBar() {
    return (
        <div className="bg-zinc-300 w-full">
            <div className="container mx-auto flex justify-between items-center">
                <div className="">
                    <h1 className="font-bold uppercase text-2xl py-5">
                        Kupona
                    </h1>
                </div>
                <div>
                    <div className="flex gap-4 justify-center items-center">
                        <button className="flex whitespace-nowrap gap-2 items-center bg-blue-400 p-3 rounded-xl">
                            Nova Campanha
                            <div className="h-6 w-[2px] bg-zinc-300"></div>
                            <span>
                                <Plus size={16} />
                            </span>
                        </button>
                        <div className="h-10 w-[2px] bg-zinc-600"></div>
                        <div className="rounded-full">
                            <img className="w-10 h-10 bg-black rounded-full" src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
