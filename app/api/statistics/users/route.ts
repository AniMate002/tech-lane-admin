import { MonthUsers } from "@/models/MonthUsers";
import { mongooseConnect } from "@/models/mongoose";
import { NextRequest, NextResponse } from "next/server";



export async function POST(req: NextRequest) {
    const data = await req.json()
    await mongooseConnect()
    await MonthUsers.create(data)
    return NextResponse.json(data)
}




export async function GET() {
    await mongooseConnect()
    const monthUsers = await MonthUsers.find() 
    return NextResponse.json(monthUsers)
}