import { NextResponse } from "next/server";
import { cookies } from 'next/headers';
import { db } from "../../route";

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

export async function POST(request, response) {
    const connection = await db;
    
    const { email, username, password } = await request.json()

    try {
        const q = "SELECT * FROM users WHERE email = ?"

        const [ rows ] = await connection.execute(q, [email]);
        
        if (!rows.length) return NextResponse.json({ message: 'User does not exist', code: 409 }, { status: 409 })
        
        const user = await rows[0]
        
        const doesPasswordMatch = await bcrypt.compare(password, user?.password)

        if (!doesPasswordMatch){
            return NextResponse.json({ message: 'Password is wrong', code: 401 }, { status: 401 })
        }

        if (doesPasswordMatch) {
            const token = jwt.sign({ id: user?.id }, process.env.NEXT_JWT_SECRET, { expiresIn: '1h' })
            
            
            cookies().set('access_token', token, {
                httpOnly: true,
                sameSite: "lax",
                secure: true,

            })
            
            return NextResponse.json({ message: "Successfully logged in!", currentUser: { id: user?.id, username: user?.username, email: user?.email }, code: 200}, { status: 200 })
        }

        return NextResponse.json({ message: 'Username or password is wrong' }, { status: 401 })

    } catch (err) {

        console.error(err); // log the error for debugging purposes

        return NextResponse.json({ error: 'Connection failed!', message: err.message }, { status: 500 })
    }

}