import { createConnection } from "@/lib/db.js";
import { NextResponse } from "next/server";

export async function GET() {
    let connection;
    try {
        connection = await createConnection();
        const [rows] = await connection.query("SELECT * FROM users");
        console.log("users:", rows);
        return NextResponse.json({ users: rows });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    } finally {
        if (connection) {
            await connection.end();
        }
    }
}