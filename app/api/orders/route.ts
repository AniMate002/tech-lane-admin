import { Order } from "@/models/Orders";
import { mongooseConnect } from "@/models/mongoose";
import { NextRequest, NextResponse } from "next/server";



export async function GET() {
    await mongooseConnect()
    const orders = await Order.find()
    return NextResponse.json(orders)
}

export async function POST(req: NextRequest, res: NextResponse) {
    const data = await req.json();
    await mongooseConnect()
    await Order.create(data)
    return NextResponse.json(data);
}