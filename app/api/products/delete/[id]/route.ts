import { Product } from "@/models/Product";
import { mongooseConnect } from "@/models/mongoose";
import { NextResponse } from "next/server";

const getIdEndPoint = (req: Request) => {
    const url = new URL(req.url)
    const arr = url.pathname.split('/')
    const _id = arr[arr.length - 1]
    return _id
}


export async function DELETE(req: Request, res: NextResponse) {
    const _id = getIdEndPoint(req)
    await mongooseConnect()
    const deletedProduct = await Product.findByIdAndDelete(_id)
    return NextResponse.json(deletedProduct)
}