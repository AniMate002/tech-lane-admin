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
    return NextResponse.json(data)
}



export async function GET(req: NextRequest){
    const url = new URL(req.url) as any
    if(url.search){
        await mongooseConnect()
        if(url.search.includes('id')){
            const id = req.nextUrl.searchParams.get('id')
            const product = await Product.findById(id)
            return NextResponse.json(product)
        }else if(url.search.includes('title')){
            const title = url.searchParams.get('title');
            let products: Array<IProduct> = [];
            if (title) {
                const results = await Product.find({
                    $text: { $search: title, $caseSensitive: false }
                }).exec();
                products = results;
            }
            return NextResponse.json({ products: products });
        }
    }else{
        await mongooseConnect()
        const products = await Product.find()
        return NextResponse.json(products)
    }
}