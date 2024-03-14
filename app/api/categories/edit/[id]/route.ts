import { Category } from "@/models/Category";
import { mongooseConnect } from "@/models/mongoose";
import { NextResponse } from "next/server";
import { split } from "postcss/lib/list";

const getIdServer = (pathname: string) => pathname.split('/')[pathname.split('/').length - 1]

export async function PUT(req:Request){
    const data = await req.json()
    const { name, svgCode, parent} = data
    const url = new URL(req.url)
    const _id = getIdServer(url.pathname)
    await mongooseConnect()
    await Category.findByIdAndUpdate(_id, data)
    return NextResponse.json(data)
}