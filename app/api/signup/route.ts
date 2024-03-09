import { User } from "@/models/User";
import { mongooseConnect } from "@/models/mongoose";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs"


export async function POST(req: NextRequest, res: NextResponse) {
    const data = await req.json()
    await mongooseConnect()
    const existingUser = await User.findOne({email: data.email})
    if(existingUser){
        return new NextResponse("User with this email already exists.", { status: 400 })
    }

    const hashedPassword = await bcrypt.hash(data.password, 5)
    const newUser = new User({...data, password: hashedPassword})
    try{
        await newUser.save()
        return new NextResponse('New user has been registered.', { status: 200 })
    }catch(e: any){
        return new NextResponse(e, { status: 500})
    }
}