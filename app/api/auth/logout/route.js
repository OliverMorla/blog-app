import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
    cookies().delete("access_token", { 
        sameSite: "none", 
        secure: true, 
    });
    return NextResponse.json({ message: "You have successfully logged out!", code: 200 }, { status: 200 });
}