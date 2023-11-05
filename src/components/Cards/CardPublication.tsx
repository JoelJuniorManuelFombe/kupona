/* eslint-disable @next/next/no-img-element */
import { Pencil } from "@phosphor-icons/react";
import React from "react";

type ICard = {
    dias: number,
    titulo: string,
    necessita: string,
    obtido: string,
    restante: string,
}


export default function CardPublication() {
    return (
        <div className="space-y-3">
            <div className="">
                <div className="absolute p-1 bg-blue-300 rounded-lg rounded-bl-none rounded-tr-none">
                    <span>90 dias</span>
                </div>
                <img
                    className="w-full h-48 bg-black rounded-lg object-cover"
                    src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                    alt=""
                />
            </div>
            <div className="space-y-3">
                <div>
                    <h1>Fundo para caridade</h1>
                </div>
                <div className="flex items-center justify-between rounded border-2 border-blue-600 text-blue-600">
                    <button className="border-r-2 border-blue-600 w-full">
                        Actualizar Camoanha
                    </button>
                    <button className="flex justify-center w-10">
                        <Pencil size={30} weight="light" />
                    </button>
                </div>
                <div className="flex gap-3 text-xs text-center bg-zinc-200 p-3 rounded-b-lg">
                    <div className="flex flex-col">
                        <span className="text-xs text-zinc-400">
                            Necessita-se
                        </span>
                        <span>300 MZN</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs text-zinc-400">Obtido</span>
                        <span>300 MZN</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs text-zinc-400">Restabte</span>
                        <span>300 MZN</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
