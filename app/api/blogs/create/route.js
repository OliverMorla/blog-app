import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { db } from "../../route";

const jwt = require('jsonwebtoken')

export async function POST(request) {
    const connection = await db;
    const { title, description, photourl, date, category } = await request.json();
    
    const token = cookies().get('access_token');
    
    const q = "INSERT INTO blogs (title, description, photourl, date, category, uid) VALUES (?)";

    jwt.verify(token.value, process.env.NEXT_JWT_SECRET, async (err, user) => {
        if(err){
            return NextResponse.json({message: err.message})
        } else {
            const uid = user.id;
            const values = [title, description, photourl, date, category, uid]
            const [res] = await connection.query(q, [values])
            return NextResponse.json({ message: "Blog was created Successfully" }, { status: 200 })
        }
    })
}