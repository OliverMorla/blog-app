import { NextResponse } from "next/server";
import { db } from "../route";

export async function GET(request) {
    try {
        const q = 
        `SELECT
            b.id,
            b.title,
            b.description,
            b.photourl,
            b.date,
            b.category,
            u.username
        FROM blogs b
        JOIN users u ON b.uid = u.id`

        const connection = await db;

        const [data] = await connection.query(q)

        await connection.end()

        return NextResponse.json(data, { status: 200 })
    } catch (err) {
        console.error(err)
        return NextResponse.json({ error: "Failed to get blogs!", error: err.message }, { status: 500 })
    }
}