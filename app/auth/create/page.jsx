"use client"

import Link from "next/link";
import "./page.scss"

export const metadata = {
    title: 'Blog App - Create An Account',
    description: 'Blog Application',
}

const handleRegister = async (username, email, password) => {

}

const Create = () => {
    return (
        <div className="container">
            <form onSubmit={handleRegister}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="name" id="name" placeholder="Enter username" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="Enter email" id="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter password" minLength={6} required />
                </div>
                <button type="submit">Register</button>
            </form>
            <Link href={'/auth/login'}>Already have an account?</Link>
        </div>
    );
}

export default Create;