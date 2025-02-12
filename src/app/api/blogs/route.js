import blogs from './blogs.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(blogs)
}