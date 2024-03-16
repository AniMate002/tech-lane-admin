"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Nunito, Cabin, Inter } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
const cabin = Cabin({ subsets: ["latin"] });

const OuterContHeader = () => {
    const pathname = usePathname().split('/')
    const renderedHistory = pathname.map((el, index) => {
        return (
            <div className="flex items-center overflow-hidden" key={index}>
                <Link className="hover:underline text-ellipsis whitespace-nowrap overflow-hidden w-[300px] sm:w-auto" href={pathname.filter((el, i) => i <= index).join('/')}>{el}</Link>
                {index === 0 ? "" : index === pathname.length - 1 ? "" : 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                }
            </div>
        )
    })
    console.log("test", pathname)
    return (
        <div className={nunito.className + " mb-10"}>
            <div className="flex justify-between items-center">
                <h2 className="capitalize text-4xl text-slate-600">{pathname[1] === '' ? 'Dashboard' : <div className="flex flex-wrap items-end">{renderedHistory}</div>}</h2>
            </div>
        </div>
    );
}
 
export default OuterContHeader;