import bcrypt from 'bcryptjs'
import { NextResponse } from "next/server";
import { db } from "../../route";

export async function POST(request) {
        const connection = await db; // connect to the database

        const { email, username, password } = await request.json() // get the data from the request

        try {
            const q = "SELECT * FROM users WHERE email = ? OR username = ?" // query to check if the user already exists
            const [rows] = await connection.query(q , [email, username]);
            
            if(rows.length) {
                return NextResponse.json({message: 'User already exists!', status: 403})
            }
        } catch (err) {
            console.error(err); // log the error for debugging purposes
            return NextResponse.json({message: 'Connection failed!', status: 500})
        } 

        try{
            const salt = bcrypt.genSaltSync(10);
            const hashedPassword = bcrypt.hashSync(password, salt)
            
            const q = "INSERT INTO users (username, password, email) VALUES (?)";
            const values = [username, hashedPassword, email];
            
            const [ res ]  = await connection.query(q, [values])
            return NextResponse.json({message: 'User has been created!', status: 200})

        } catch (err) {
            console.error(err)
            return NextResponse.json({message: err.message, status: 401})

        } finally {
            if(connection){
                connection.end()
            }
        }
}