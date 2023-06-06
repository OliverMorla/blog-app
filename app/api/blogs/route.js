import { NextResponse } from "next/server";
import { db } from "../route";

export async function GET(request) { 
    try {
    
        const q = 'SELECT * FROM blogs'
        const connection = await db;
        
        const [ data ] = await connection.query(q)

        return NextResponse.json(data, {status: 200})

    } catch (err) {
        console.error(err)
        return NextResponse.json({ error: "Failed to get blogs!", error: err.message}, {status: 500})
    }
}