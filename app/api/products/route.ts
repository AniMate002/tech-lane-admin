import { IProduct } from "@/app/products/new/page";
import { Product } from "@/models/Product";
import { mongooseConnect } from "@/models/mongoose";
import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: Request, res: NextApiResponse){
    const { method } = req
    const data = await req.json()

    await mongooseConnect()
    const productDoc = await Product.create(data)
    console.log(productDoc, method)
    return NextResponse.json(data)
}



export async function GET(req: NextRequest){
    const url = new URL(req.url) as any
    const id = url.search.split('=')[1]
    await mongooseConnect()
    const product = await Product.findById(id)
    return NextResponse.json(product)
}