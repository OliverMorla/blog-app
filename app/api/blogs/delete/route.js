import jwt from "jsonwebtoken"
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request) { 
    const token = cookies().get("acess_token")

    if (!token){
        return NextResponse.json({message: "You are not logged in!", code: 401}, {status: 401})
    }

    if(token){
        const q = "SELECT * FROM blogs WHERE id = ? AND uid = ?"
            jwt.verify(token, process.env.NEXT_JWT_SECRET, (err, userInfo) => {
                if(err) return 
            })
        J
    }
}