'use client'
import { cabin, nunito } from "@/app/layout";
import AuthInput from "./AuthInput";
import Link from "next/link";
import { FormEvent, use, useState } from "react";
import { IUser } from "@/models/User";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";


const SignUpPage = () => {
    const [user, setUser] = useState<IUser>({name: '', password: '', email: '', createdAt: ''})
    const router = useRouter()
    function signUpClickHandler(e: FormEvent<HTMLFormElement>){
        e.preventDefault()
        if(user.password && user.email && user.name){
            axios.post('/api/signup', { ...user, createdAt: (new Date()).toLocaleString()})
                .then(res => {
                    console.log(res.data)
                    Swal.fire({
                        title: 'Success!',
                        text: res.data,
                        icon: 'success' ,
                        confirmButtonText: 'Cool'
                    }).then(data => {
                        if(data.isConfirmed){
                            router.replace('/')
                        }
                    })
                })
                .catch(e => {
                    console.log(e)
                    if(e.response.status == 400){
                        Swal.fire({
                            title: 'Ooops...',
                            text: e.response.data,
                            icon: 'error' ,
                            confirmButtonText: 'Ok'
                        })
                    }
                })
        }
    }
    return (
        <div className=" w-[500px] text-center bg-white p-16 rounded-2xl">
            <h1 className={nunito.className + " text-6xl font-bold text-blue-500"}>Sign Up</h1>
            <p className="text-slate-400 mt-4 text-sm ">Secure Your Communications with TechLane</p>
            <form onSubmit={e => signUpClickHandler(e)} className="mt-10">
                <AuthInput value={user.name} onChange={e => setUser((prev: IUser) => ({...prev, name: e.target.value}))} type="text"  svgCode="fa-regular fa-user" placeholder="User Name..." className="mx-auto" required/>
                <AuthInput value={user.email} onChange={e => setUser((prev: IUser) => ({...prev, email: e.target.value}))} type="email" svgCode="fa-regular fa-at" placeholder="Email address..." className="mx-auto mt-10" required/>
                <AuthInput value={user.password} onChange={e => setUser((prev: IUser) => ({...prev, password: e.target.value}))} type="password" svgCode="fa-solid fa-lock" placeholder="User Name..." className="mx-auto mt-10" required/>
                <button type="submit" className="text-white bg-blue-600 px-10 py-3 rounded-full mt-10 flex items-center gap-4">
                    <span>Sign Up</span>
                    <div className="flex w-[50px] h-[30px] bg-blue-500 rounded-full items-center justify-center">
                        <i className="fa-solid fa-arrow-right-long"></i>
                    </div>
                </button>
            </form>
            <div className="flex items-baseline gap-2 text-sm mt-6 text-slate-400 font-semibold">
                <span>Already a member?</span>
                <Link href={'/login'} className="font-bold text-blue-500 border-b-2 border-blue-500 hover:text-blue-400 hover:border-blue-400 transition-all">Log in</Link>
            </div>
        </div>
    );
}
 
export default SignUpPage;