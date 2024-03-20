import { Owner } from "@/models/Owner";
import { mongooseConnect } from "@/models/mongoose";
import { NextRequest, NextResponse } from "next/server";



export async function POST(req: NextRequest) {
    const data = await req.json()
    await mongooseConnect()
    await Owner.create(data)
    return NextResponse.json(data)
}

export async function GET() {
    await mongooseConnect()
    const owners = await Owner.find()
    return NextResponse.json(owners)
}