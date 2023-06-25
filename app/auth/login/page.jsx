"use client"

import Link from "next/link";
import { useGlobal } from "../../context/GlobalContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./page.scss"

const Login = () => {
    const router = useRouter();

    const { currentUser, Login } = useGlobal()

    const [input, setInput] = useState({ email: '', password: '' })

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    // Testing inputs
    useEffect(() => {
        console.log(input);
    })

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await Login(input);
        } catch (error) {
            console.error(error);
        }

        if (currentUser) {
            router.push('/')
        }
    }

    return (
        <div className="container">
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="Enter email" id="email" required onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter password" minLength={6} required onChange={handleChange} />
                </div>
                <button type="submit">Login</button>
            </form>
            <Link href={'/auth/register'}>Don't have an account?</Link>
        </div>
    );
}

export default Login;