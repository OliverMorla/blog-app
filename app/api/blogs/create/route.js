import { NextResponse } from "next/server";
import { db } from "../../route";

export async function POST(request) {
    const connection = await db;

    const q = "INSERT INTO blogs (title, description, photourl, date, category) VALUES (?)"
    const { title, description, photourl, date, category } = await request.json();
    const values = [title, description, photourl, date, category]

    const [res] = await connection.query(q, [values])
    console.log(res)
    return NextResponse.json({ message: "Blog was created Successfully" }, { status: 200 })
}