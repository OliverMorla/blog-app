import { NextResponse } from "next/server";
import { db } from "../route";

export async function GET(resquest) {
    try {
        const connection = await db;
        const res = await connection.execute('SELECT * FROM news')
        return NextResponse.json(res[0])
    } catch (err) {
        return new Response('Connection failed!', { headers: { 'Content-Type': 'text/plain' } })
    }
}

export async function POST(request) {
    const connection = await db;

    const { id, title, descripion, category, date, photourl } = await request.json()

    const q = `INSERT INTO news (id, title, description, category, date, photourl)
    VALUES (${connection.escape(id)}, ${connection.escape(title)}, ${connection.escape(descripion)}, ${connection.escape(category)}, ${connection.escape(date)}, ${connection.escape(photourl)})`

    try {
        await connection.query(q);
        return NextResponse.json('Data Inserted!')
    } catch (error) {
        console.error("Failed to insert data:", error);
        return NextResponse.json({ error: "Failed to insert data" });
    }
}
