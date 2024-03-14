import { Category } from "@/models/Category"
import { mongooseConnect } from "@/models/mongoose"
import { NextResponse } from "next/server"
import { json } from "stream/consumers"

const getIdServer = (pathname: string) => pathname.split('/')[pathname.split('/').length - 1]


export async function DELETE(req: Request){
    const url = new URL(req.url)
    const _id = getIdServer(url.pathname)
    await mongooseConnect()
    await Category.findByIdAndDelete(_id)
    return NextResponse.json({title: 'Post deleted: ' + _id})
}