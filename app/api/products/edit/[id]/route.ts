import { Product } from "@/models/Product";
import { mongooseConnect } from "@/models/mongoose";
import { NextResponse } from "next/server";

const getIdEndPoint = (req: Request) => {
    const url = new URL(req.url)
    const arr = url.pathname.split('/')
    const _id = arr[arr.length - 1]
    return _id
}

export async function GET(req: Request) {
    const _id = getIdEndPoint(req)
    await mongooseConnect()
    const product = await Product.findById(_id)
    return NextResponse.json(product)
}

export async function PUT(req:Request, res: NextResponse){
    const { title, description, price, image, country, category, colors, memories, comments} = await req.json()
    const _id = getIdEndPoint(req)
    mongooseConnect()
    const product = await Product.findByIdAndUpdate(_id, { title, description, price, image, country, category, colors, memories, comments})
    return NextResponse.json(product)
}