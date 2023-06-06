import { NextResponse } from "next/server";
import { db } from "../../route";

const bcrypt = require('bcryptjs')

export async function POST(resquest) {
        const connection = await db; // connect to the database

        const { email, username, password } = await resquest.json() // get the data from the request

        try {
            const q = "SELECT * FROM users WHERE email = ? OR username = ?" // query to check if the user already exists
            const [rows] = await connection.query(q , [email, username]);
            if(rows.length) {
                return new Response(JSON.stringify({message: 'User already exists!' }))
            }
        } catch (err) {
            console.error(err); // log the error for debugging purposes
            return new Response(JSON.stringify({message: 'Connection failed!'}))
        }

        try{
            const salt = bcrypt.genSaltSync(10);
            const hashedPassword = bcrypt.hashSync(password, salt)
            
            const q = "INSERT INTO users (username, password, email) VALUES (?)";
            const values = [username, hashedPassword, email];
            
            const [ res ]  = await connection.query(q, [values])
            return NextResponse.json({ message: 'User has been created!' })

        } catch (err) {
            console.error(err)
            return NextResponse.json({error: 'Password failed', message: err.message})
        }
}