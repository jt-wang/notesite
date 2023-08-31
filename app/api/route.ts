import { NextResponse } from "next/server";
export const runtime = 'edge'
export const revalidate = 60;

export async function GET() {
    const res =await fetch('https://api.thecatapi.com/v1/images/search')
    const json = await res.json()
    return NextResponse.json(json[0]);
}
