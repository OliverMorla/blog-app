import { db } from "../route";

export async function GET(resquest) {
    try {
        const connection = await db;
        const res = await connection.execute('SELECT * FROM blogs')
        return new Response(JSON.stringify(res[0]), { headers: { 'Content-Type': 'application/json' } })
    } catch (err) {
        return new Response(JSON.stringify({message: 'Connection failed!' }), { headers: { 'Content-Type': 'text/plain' } })
    }
}