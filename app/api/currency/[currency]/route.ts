import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const url = new URL(req.url).pathname
    const arr = url.split('/')
    const currency = arr[arr.length - 1]
    // const { currency } = data
    const res = await axios.get(`https://v6.exchangerate-api.com/v6/${process.env.CURRENCY_KEY}/latest/${currency}`)
    const data = res.data
    return NextResponse.json(data)
}