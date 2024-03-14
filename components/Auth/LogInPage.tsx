'use client'
import Link from "next/link";
import AuthInput from "./AuthInput";
import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Swal from "sweetalert2";
import { Nunito, Cabin, Inter } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
const cabin = Cabin({ subsets: ["latin"] });


const LogInPage = () => {
    const router = useRouter()
    // console.log(session)
    const [credentials, setCredentials] = useState<{password: string, email: string}>({ password: '', email: ''})
    function logUpClickHandler(e: FormEvent<HTMLFormElement>){
        e.preventDefault()
        // console.log(credentials)
    }
    return (
        <div className=" w-[500px] text-center bg-white p-16 rounded-2xl relative">
            <Link href={'/'} className="absolute left-6 top-6 text-blue-500">
                <i className="fa-solid fa-angle-left"></i>
                <span>Go back</span>
            </Link>
            <h1 className={nunito.className + " text-6xl font-bold text-blue-500"}>Log in</h1>
            <p className="text-slate-400 mt-4 text-sm ">Secure Your Communications with TechLane</p>
            <form onSubmit={e => logUpClickHandler(e)} className="mt-10">
                <AuthInput value={credentials.email} onChange={e => setCredentials((prev) => ({...prev, email: e.target.value}))} type="email" svgCode="fa-regular fa-at" placeholder="Email address..." className="mx-auto mt-10" required/>
                <AuthInput value={credentials.password} onChange={e => setCredentials((prev) => ({...prev, password: e.target.value}))} type="password" svgCode="fa-solid fa-lock" placeholder="User Name..." className="mx-auto mt-10" required/>
                <button type="submit" className="text-white bg-blue-600 px-10 py-3 rounded-full mt-10 flex items-center gap-4">
                    <span>Sign Up</span>
                    <div className="flex w-[50px] h-[30px] bg-blue-500 rounded-full items-center justify-center">
                        {/* {session.status === 'loading'
                        ? <i className="fa-solid fa-circle-notch fa-spin"></i>
                        : <i className="fa-solid fa-arrow-right-long"></i>
                        } */}
                        <i className="fa-solid fa-circle-notch fa-spin"></i>
                    </div>
                </button>
            </form>
            <div className="flex items-baseline gap-2 text-sm mt-6 text-slate-400 font-semibold">
                <span>Don&apos;t have an account?</span>
                <Link href={'/signup'} className="font-bold text-blue-500 border-b-2 border-blue-500 hover:text-blue-400 hover:border-blue-400 transition-all">Sign up</Link>
            </div>
        </div>
    );
}
 
export default LogInPage;