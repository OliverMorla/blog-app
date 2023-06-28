import { NextResponse } from 'next/server'
const mysql = require('mysql2/promise')

async function connectDB() {
    const connection = await mysql.createConnection({
        host: process.env.NEXT_SQL_DATABASE_HOSTNAME,
        user: process.env.NEXT_SQL_DATABASE_USERNAME,
        password: process.env.NEXT_SQL_DATABASE_PASSWORD,
        database: process.env.NEXT_SQL_DATABASE_NAME,
        port: process.env.NEXT_SQL_DATABASE_PORT
    })
    return connection;
}

export const db = connectDB()

export async function GET(request) {
    let connection;
    try {
        connection = await connectDB()
        await connection.ping() 
        return NextResponse.json({ message: 'Connection Sucessful!' })
    } catch (err) {
        console.error(err)
        return NextResponse.json({ error: 'Connection Failed!', message: err.message })
    } finally {
        if(connection){
            connection.end()
        }
    }
}




