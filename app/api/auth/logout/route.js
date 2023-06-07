import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request) {
    cookies().delete("access_token")
    
    return NextResponse.json({ message: "You have successfully logged out!" }, { status: 200});
}