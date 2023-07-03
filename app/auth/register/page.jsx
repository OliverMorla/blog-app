"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useGlobal } from "@/app/context/GlobalContext";
import { useState, useEffect } from "react";
import "./page.scss"

const Register = () => {
    const router = useRouter()
    const { signUp } = useGlobal()

    const [error, setError] = useState('')

    const [input, setInput] = useState({
        email: " ",
        password: " ",
        username: " ",
    })

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    // Testing inputs
    useEffect(() => {
        console.log(input);
    })

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const res = await signUp(input)
            if (res.status === 200) {
                router.push('/auth/login')
            }
            setError(res.message)
        } catch (err) {
            // console.log(res.message)
        }
    }

    return (
        <div className="container">
            {error &&
                <div className="error-modal">
                    <h2>
                        {error}
                    </h2>
                </div>
            }
            <form onSubmit={handleRegister}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter username"
                        id="name"
                        required
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        id="email"
                        required
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        id="password"
                        minLength={6}
                        required
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Register</button>
            </form>
            <Link href={'/auth/login'}>Already have an account?</Link>
        </div>
    );
}

export default Register;