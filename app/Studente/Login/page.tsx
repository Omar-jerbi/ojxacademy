"use client"

import { MouseEvent, useEffect, useState } from "react";
import { UseUserContext } from "@/app/contexts/userContext";
import { useRouter } from "next/navigation";




export default function () {
    const { user, setUser } = UseUserContext()

    const router = useRouter()

    const [i, si] = useState({
        mail: '',
        pw: ''
    })

    const [l, sl] = useState(false)

    const handleClick = async (e: MouseEvent) => {
        sl(true)
        if (i.mail == '' || i.pw == '') {
            sl(false)
            alert("manca")
        }
        else {
            const founduser = await fetch("/api/Student/Login", {
                method: "POST",
                body: JSON.stringify({ email: i.mail, pw: i.pw })
            })

            const res = await founduser.json()
            sl(false)

            if (!res)
                alert("no acc")
            else {
                setUser(res.id)
                router.push("/Studente/" + res.id)
            }

        }
    }




    return (
        <div className="login rounded-md border-2 border-white bg-gray-950">
            <div className="form flex flex-col w-11/12 mx-auto py-10 gap-10">
                <input className="outline-none h-8 py-1 px-1 rounded-md text-black " type="email" placeholder="Email..." onChange={(e) => si({ ...i, mail: e.target.value })} />
                <input className="outline-none h-8 py-1 px-1 rounded-md text-black " type="password" placeholder="Password" onChange={(e) => si({ ...i, pw: e.target.value })} />

                <button
                    className="text-center py-2 w-3/6 mx-auto rounded-md border-2 border-transparent transition-all hover:border-white"
                    onClick={(e) => handleClick(e)}>
                    Login
                </button>

                {l &&
                    <div className="">
                        ...
                    </div>
                }

                <div className="call">
                    Non sei ancora studente OJX? <a className="underline underline-offset-4" href="mailto:info@ojxwebdev.com">Contattaci per maggiori informazioni!</a>
                </div>
            </div>
        </div>
    );
}