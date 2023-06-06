import { db } from "@/app/api/route";
import { NextResponse } from "next/server";

export async function GET(request){
    const connection = await db;

    const { searchParams } = new URL(request.url)

    const categoryType = searchParams.get("query")

    const res = await connection.query(`SELECT * FROM blogs WHERE category = ?`, [categoryType])

    // connection.end()
    return NextResponse.json(res[0])
}