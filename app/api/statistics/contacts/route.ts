import { MonthContacts } from "@/models/MonthContacts";
import { mongooseConnect } from "@/models/mongoose";
import { NextRequest, NextResponse } from "next/server";



export async function POST(req: NextRequest) {
    const data = await req.json()
    await mongooseConnect()
    await MonthContacts.create(data)
    return NextResponse.json(data)
}




export async function GET() {
    await mongooseConnect()
    const monthContacts = await MonthContacts.find() 
    return NextResponse.json(monthContacts)
}