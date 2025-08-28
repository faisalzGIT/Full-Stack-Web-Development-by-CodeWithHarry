import { NextResponse} from "next/server";

export async function POST(request) {
    let data = await request.json()
    console.log(data, "data from client")
    return NextResponse.json({success: true, data})
}