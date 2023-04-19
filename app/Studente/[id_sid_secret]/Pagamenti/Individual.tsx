"use client"

import { nextmonth, students } from "@prisma/client"
import { getNM } from "./Group"
import { useEffect, useState } from "react"
import { week } from "../Sch"
import swal from "sweetalert"

interface props {
  showing: boolean,
  stud: students,//dati per pag fattura
  sid: number | null
}

export default function Individual({ showing, sid, stud }: props) {
  const [nm, snm] = useState<nextmonth>()
  const [s, ss] = useState<week[]>()


  useEffect(() => {
    const f = async () => {
      const x = await getNM(sid, 0)
      snm(x)
      ss(JSON.parse(JSON.stringify(x?.schedule) ?? "[]"))
    }

    f()
  }, [])

  return (
    <div className={(!showing ? "blur-xs scale-[0.85] opacity-40 pointer-events-none" : "hover:bg-slate-950 transition-all") + " bg-gray-900 p-6 rounded-lg shadow-white/40 shadow-sm flex flex-col justify-between items-center max-sm:px-3 max-sm:w-2/5"}>
      <div className="tit text-yellow-500 font-semibold">Piano lezioni individuali</div>
      <div className="tit">Dal {nm?.from.toString().slice(0, 10) ?? <span className="text-yellow-200">...</span>} </div>
      <div className="tit">Al  {nm?.to.toString().slice(0, 10) ?? <span className="text-yellow-200">...</span>}</div>

      <div className="tit mt-2">Agenda settimanale:</div>
      {
        s?.map((e: week, k: number) =>
          <div key={k}>
            <div className="capitalize">{e.d}:</div>
            <div><span className="text-yellow-200 font-semibold text-xs">Inizio </span>{e.f}</div>
            <div><span className="text-yellow-200 font-semibold text-xs">Fine </span>{e.t}</div>
          </div>
        ) ?? <span className="text-yellow-200">...</span>

      }


      <hr className="border-0 outline-none bg-slate-600 w-1/2 my-5" style={{ height: "1px" }} />

      <div className="tit mb-4">Totale: <span className="font-semibold text-slate-300 underline">249.00€</span></div>

      <button
        className="border border-slate-300 py-2 px-4 rounded hover:bg-slate-400 transition-colors"
        onClick={async () => {
          await fetch(process.env.NEXT_PUBLIC_API_URL + "api/Payments/ChangeType/ToI", {
            method: "POST",
            body: JSON.stringify({ stud: stud, nm: nm }),
            cache: "no-cache"
          })

          //fai giochetto del route refresh !!! 

          swal(stud.name + " paghera con stripe e se aveva un gruppo gli verra rimosso e aggiunto/aggiornato lo schedule personale mostrato")
        }}
      >
        Vai al pagamento
      </button>
    </div>
  )
}
