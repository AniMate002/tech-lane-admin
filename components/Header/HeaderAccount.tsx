'use client'
import { IUser } from "@/models/User";
import React, { useEffect, useState } from "react";
import AvatarMenu from "./AvatarMenu";
import Image from "next/image";
import { Nunito, Cabin, Inter } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
const cabin = Cabin({ subsets: ["latin"] });
interface HeaderAccountProsp {
    user: { name?: string | null | undefined; email?: string | null | undefined; image?: string | null | undefined; } | undefined
}

const HeaderAccount:React.FC<HeaderAccountProsp> = ({ user }) => {
    const [showMenu, setShowMenu] = useState<boolean>(false)
    const afterEl = 'after:content-[""] after:absolute after:top-0 after:right-0 after:h-[10px] after:w-[10px] after:block after:bg-white after:rounded-full after:shadow-sm after:shadow-white'
    return (
        <div onClick={() => setShowMenu(true)} className="flex gap-6 items-center relative">
            <button className={`relative ${afterEl}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                </svg>
            </button>
            <button className={"relative " + afterEl}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
            </button>
            <div className={cabin.className + " text-white font-semibold text-lg"}>{user?.name}</div>
            <div className="overflow-hidden h-[40px] w-[40px] rounded-full">
                <Image height={40} width={40} src="https://images.pexels.com/photos/12493890/pexels-photo-12493890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="avatar" />
            </div>
            {
                showMenu ? <AvatarMenu user={user} setShowMenu={setShowMenu}/> : ''
            }
        </div>
    );
}
 
export default HeaderAccount;