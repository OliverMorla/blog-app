"use client"

import React, { useContext, useEffect, useState } from 'react';

const GlobalContext = React.createContext()

export function useGlobal() {
    return useContext(GlobalContext);
}

export function GlobalProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [SignedIn, setSignedIn] = useState()

    const signUp = async (inputs) => {
        const POST = { method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputs)
        }
    }

    const Login = async (inputs) => {
        const POST = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputs)
        }
        
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL_LOGIN, POST)
        const user = await res.json();

        if (user) {
            localStorage.setItem('user', JSON.stringify(user.currentUser));
            setCurrentUser(user.currentUser);
        }
    }

    const logOut = async () => {
        const POST = { method: 'POST', headers: { 'Content-Type': 'application/json' }}
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL_LOGIN, POST)
    // localStorage.removeItem("user");    
        setCurrentUser(null);
    }

    const value = {
        SignedIn,
        setSignedIn,
        currentUser,
        setCurrentUser,
        Login,
        logOut
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}
