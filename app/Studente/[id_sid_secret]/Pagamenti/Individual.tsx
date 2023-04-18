"use client"

import { nextmonth, students } from "@prisma/client"
import { getNM } from "./Group"
import { useEffect, useState } from "react"

interface props {
    showing: boolean,
    stud: students,//dati per pag fattura
    sid:number | null
}

export default function Individual({ showing, sid, stud }: props) {

    const [nm, snm] = useState<nextmonth>()

    useEffect(() => {
      const f = async () => {
        const x = await getNM(sid, 0)
        snm(x)
      }
  
      f()
    }, [])
    
    return (
        <div className={(!showing ? "blur-xs scale-[0.85] opacity-40 pointer-events-none" : "hover:bg-slate-950 transition-all") + " bg-gray-900 p-6 rounded-lg shadow-white/40 shadow-sm flex flex-col justify-center items-center"}>
            <div className="tit text-yellow-500 font-semibold">Piano lezioni individuali</div>
            <div className="tit">Dal {nm?.from.toString().slice(0, 10) ?? "..."} </div>
            <div className="tit">Al  {nm?.to.toString().slice(0, 10) ?? "..."}</div>

            <hr className="border-0 outline-none bg-slate-600 w-1/2 my-5" style={{ height: "1px" }} />

            <div className="tit mb-4">Totale: <span className="font-semibold text-slate-300 underline">249.00€</span></div>
            
            <button className="border border-slate-300 py-2 px-4 rounded">Vai al pagamento</button>
        </div>
    )
}
