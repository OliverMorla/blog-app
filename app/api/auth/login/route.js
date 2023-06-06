import { NextResponse } from "next/server";
import { cookies } from 'next/headers';
import { db } from "../../route";

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

export async function POST(resquest) {
    const connection = await db;

    const { email, username, password } = await resquest.json()

    try {
        const q = "SELECT * FROM users WHERE email = ?"

        const [users] = await connection.query(q, [email]);

        if (users.length === 0) {
            return NextResponse.json({ message: 'User does not exist' }, { status: 409 })
        }

        const user = users[0]

        const doesPasswordMatch = await bcrypt.compare(password, user.password)

        if (!doesPasswordMatch) return NextResponse.json({ error: 'Password is wrong' }, { status: 401 })

        if (doesPasswordMatch) {

            const token = jwt.sign({ id: user.id }, process.env.NEXT_JWT_SECRET, { expiresIn: '1h' })
            cookies().set('access_token', token, {
                httpOnly: true,
                sameSite: "lax",
                secure: true
            })

            return NextResponse.json({ currentUser: { id: user.id, username: user.username, email: user.email } }, { status: 200 })
        }

        return NextResponse.json({ error: 'Username or password is wrong' }, { status: 401 })

    } catch (err) {

        console.error(err); // log the error for debugging purposes

        return NextResponse.json({ error: 'Connection failed!', message: err.message }, { status: 500 })
    }

}