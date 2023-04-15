"use client"

import { createContext, useContext, useEffect, useState } from "react";


interface user {
    id: string
}

export const defUser: user = { id: "" }

interface userType {
    user: user,
    setUser: (x: string) => void
}


const UserContext = createContext<userType>({ user: defUser, setUser: () => { } })

export const UserContextProvider = ({ children }: { children: React.ReactNode }) => {    
    useEffect(() => {        
        if (sessionStorage.getItem("user")) {
            setU({ ...user, id: sessionStorage.getItem("user")! })
        }
    }, [])

    
    const [user, setU] = useState<user>({ id: "" })
    const setUser = (x: string) => {
        setU({ ...user, id: x })
    }

    useEffect(() => {
        if (user.id != '') {
            sessionStorage.setItem("user", user.id)
        }
    }, [user])

    return (
        <UserContext.Provider value={{ user, setUser }} >
            {children}
        </UserContext.Provider >
    )
}

export const UseUserContext = () => useContext(UserContext)