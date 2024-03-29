import { User } from "@/models/User";
import { mongooseConnect } from "@/models/mongoose";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs"


export const authConfig: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            credentials: {
                email: {label: 'Email', type: 'email', required: true},
                password: {label: 'Password', type: 'password', required: true}
            },
            async authorize(credentials:any) {
                if(!credentials?.email || !credentials?.password) return null
                
                try{
                    await mongooseConnect()
                    const foundUser = await User.findOne({ email: credentials.email })
                    if(foundUser){
                        const isPasswordCorrect = await bcrypt.compare(credentials.password, foundUser.password)
                        if(isPasswordCorrect){
                            return foundUser
                        }
                    }
                }catch(e: any){
                    throw new Error(e)
                }
            },
        })
      ],
      pages: {
        signIn: '/login'
      }
}