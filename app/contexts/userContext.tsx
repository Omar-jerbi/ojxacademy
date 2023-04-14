"use client"

import { createContext, useContext, useState } from "react";


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
    const [user, setU] = useState<user>(defUser)

    const setUser = (x: string) => {
        setU({ ...user, id: x })
    }

    return (
        <UserContext.Provider value={{ user, setUser }} >
            {children}
        </UserContext.Provider >
    )
}

export const UseUserContext = () => useContext(UserContext)