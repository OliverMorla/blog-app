"use client"

import React, { useContext, useEffect, useState } from 'react';

const GlobalContext = React.createContext()

export function useGlobal() {
    return useContext(GlobalContext);
}

export function GlobalProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();


    console.log(currentUser)

    const signUp = async (inputs) => {
        const POST = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputs)
        }

        const res = await fetch(process.env.NEXT_PUBLIC_REGISTER_API_URL, POST)
        const user = await res.json()

        return user;
    }

    const Login = async (inputs) => {
        const POST = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputs)
        }

        const res = await fetch(process.env.NEXT_PUBLIC_LOGIN_API_URL, POST)
        const user = await res.json();

        if (user) {
            localStorage.setItem('user', JSON.stringify(user.currentUser));
            setCurrentUser(user.currentUser);
        }

        return user;
    }

    const logOut = async () => {
        const GET = { method: 'GET', headers: { 'Content-Type': 'application/json' } }

        const res = await fetch(process.env.NEXT_PUBLIC_LOGOUT_API_URL, GET)
        const user = res.json()

        localStorage.removeItem("user");
        setCurrentUser(null);

        return user;
    }

    useEffect(() => {
        setCurrentUser(JSON.parse(localStorage.getItem("user")))
    }, [])

    const value = {
        currentUser,
        setCurrentUser,
        Login,
        logOut,
        signUp
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}
