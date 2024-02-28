import { Category } from "@/models/Category";
import { mongooseConnect } from "@/models/mongoose";
import { NextResponse } from "next/server";


export async function POST(req: Request, res: NextResponse){
    const data = await req.json()
    const { name, svgCode, parent } = data
    await mongooseConnect()

    await Category.create({ name, svgCode, parent })
    return NextResponse.json({name, svgCode, parent})
}


export async function GET(){
    await mongooseConnect()
    const categories = await Category.find()
    return NextResponse.json(categories)
}