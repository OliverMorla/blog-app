"use client"

import React, { useContext, useEffect, useState } from 'react';

const GlobalContext = React.createContext()

export function useGlobal() {
    return useContext(GlobalContext);
}

export function GlobalProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();

    const signUp = async (inputs) => {
        const POST = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputs)
        }
        const res = await fetch(process.env.NEXT_PUBLIC_REGISTER_API_URL, POST)

        return res.json();
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

        if (user != undefined) {
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

    const createBlog = async (inputs) => {
        const POST = {
            method: 'POST',
            body: JSON.stringify(inputs)
        }

        const res = await fetch(process.env.NEXT_PUBLIC_BLOG_CREATE_URL, POST)
        const data = await res.json()
    }

    const updateBlog = async (inputs) => {
        const POST = {
            method: "POST",
            header: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(inputs)
        }

        const res = await fetch(process.env.NEXT_PUBLIC_BLOG_UPDATE_URL, POST)
        const data = await res.json()
    }

    const deleteBlog = async (inputs) => {
        const POST = {
            method: "POST",
            header: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(inputs)
        }

        const res = await fetch(process.env.NEXT_PUBLIC_BLOG_DELETE_URL, POST)
        const data = await res.json()
    }

    const createNews = async (inputs) => {
        const POST = {
            method: "POST",
            header: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(inputs)
        }

        try {
            const res = await fetch(process.env.NEXT_PUBLIC_NEWS_CREATE_URL, POST)
        } catch (err) {

        }
    }

    const updateNews = async (inputs) => {
        const POST = {
            method: "POST",
            header: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(inputs)
        }

        try {
            const res = await fetch(process.env.NEXT_PUBLIC_NEWS_UPDATE_URL, POST)
        } catch (err) {

        }
    }

    const deleteNews = async (inputs) => {
        const POST = {
            method: "POST",
            header: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(inputs)
        }

        try {
            const res = await fetch(process.env.NEXT_PUBLIC_NEWS_DELETE_URL, POST)
        } catch (err) {

        }
    }

    useEffect(() => {
        setCurrentUser(JSON.parse(localStorage.getItem("user")))
    }, [])

    const value = {
        currentUser,
        setCurrentUser,
        Login,
        logOut,
        signUp,
        createBlog,
        deleteBlog,
        updateBlog
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}
