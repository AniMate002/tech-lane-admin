import { User } from "@/models/User"
import { mongooseConnect } from "@/models/mongoose"
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import GithubProvider from "next-auth/providers/github"
import bcrypt from "bcryptjs"



export const authOptions: any = {
  // Configure one or more authentication providers
  providers: [
    Credentials({
        credentials: {
            email: {label: 'Email', type: 'email', required: true},
            password: {label: 'Password', type: 'password', required: true}
        },
        async authorize(credentials) {
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
            return null
        },
    })
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)