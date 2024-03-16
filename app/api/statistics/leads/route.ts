import { MonthContacts } from "@/models/MonthContacts";
import { MonthLeads } from "@/models/MonthLeads";
import { mongooseConnect } from "@/models/mongoose";
import { NextRequest, NextResponse } from "next/server";



export async function POST(req: NextRequest) {
    const data = await req.json()
    await mongooseConnect()
    await MonthLeads.create(data)
    return NextResponse.json(data)
}




export async function GET() {
    await mongooseConnect()
    const monthLeads = await MonthLeads.find() 
    return NextResponse.json(monthLeads)
}