import { User } from "@/models/User"
import { mongooseConnect } from "@/models/mongoose"
import NextAuth, { AuthOptions, NextAuthOptions } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"



export const authOptions: NextAuthOptions = {
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
            // return null
        },
    })
  ],
  pages: {
    signIn: '/login'
  }
}
// export default NextAuth(authOptions)
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST}
