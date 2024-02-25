import { IProduct } from "@/app/products/new/page";
import { Product } from "@/models/Product";
import { mongooseConnect } from "@/models/mongoose";
import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";


export async function POST(req: Request, res: NextApiResponse){
    const { method } = req
    const data = await req.json()

    await mongooseConnect()
    if(method === 'POST'){
        const productDoc = await Product.create(data)
        console.log(productDoc, method)
        return new NextResponse(JSON.stringify(data))
    }
}


export async function GET(req: Request){
    return NextResponse.json({text: "Hello"})
}