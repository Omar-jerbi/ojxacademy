"use client"

import Link from "next/link";
import './Login.scss'
import { MouseEvent, useState } from "react";
import { UseUserContext } from "@/app/contexts/userContext";



export default function () {
    const { user, setUser } = UseUserContext()

    const [i, si] = useState({
        mail: '',
        pw: ''
    })

    const getId = () => {
        return 9999
    }


    const handleClick = (e: MouseEvent) => {
        if (i.mail == '' || i.pw == '')
            e.preventDefault()
        else {
            setUser(9999)
        }
    }

    return (
        <div className="login bg-gray-950 flex justify-center items-center relative overflow-hidden" style={{ minHeight: "100vh" }}>
            <div className="container mx-auto rounded-md border-2 border-white bg-gray-950 z-10">
                <div className="form flex flex-col w-11/12 mx-auto py-10 gap-10">
                    <input className="outline-none h-8 py-1 px-1 rounded-md text-black " type="email" placeholder="Email..." onChange={(e) => si({ ...i, mail: e.target.value })} />
                    <input className="outline-none h-8 py-1 px-1 rounded-md text-black " type="password" placeholder="Password" onChange={(e) => si({ ...i, pw: e.target.value })} />

                    <Link
                        className="text-center py-2 w-3/6 mx-auto rounded-md border-2 border-transparent transition-all hover:border-white"
                        href={"/Studente/" + getId()}
                        onClick={(e) => handleClick(e)}>
                        Login
                    </Link>

                    <div className="call">
                        Non sei ancora studente OJX? <a className="underline underline-offset-4" href="mailto:info@ojxwebdev.com">Contattaci per maggiori informazioni!</a>
                    </div>
                </div>
            </div>

            <div id="circlec" className=" absolute h-[100vh] w-[100vh] rounded-full bg-cyan-400 blur-3xl opacity-50 bottom-[-25vh] left-[-25vh] z-0"></div>
            <div id="circlep" className=" absolute h-[100vh] w-[100vh] rounded-full bg-purple-500 blur-3xl opacity-50 top-[-25vh] right-[-25vh] z-0"></div>
        </div>
    );
}