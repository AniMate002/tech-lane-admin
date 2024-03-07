'use client'
import { cabin, inter } from "@/app/layout"
import InnerContainer from "../Containers/InnerContainer"
import Link from "next/link"
import ProductDeleteBtn from "../Products/ProductDeleteBtn"
import React, { useEffect, useState } from "react"
import { IProduct } from "@/app/products/new/page"
import { useParams } from "next/navigation"
import axios from "axios"

interface SingleProductInfoProps extends IProduct {}

const SingleProductInfo:React.FC<SingleProductInfoProps> = (product) => {
    const route = useParams()
    const renderedColors = product?.colors?.map((color: string) => <div className={`w-[35px] h-[35px] rounded-full border-[1px] border-slate-200 ${color}Bg`} key={color} />)
    return (
        <InnerContainer className="flex items-center justify-between w-full">
            <div className="w-[500px] h-[500px] overflow-hidden flex items-center justify-center rounded-xl flex-shrink-0">
                <img src={product?.image} alt={product?.description} />
            </div>
            <div className="text-center flex-grow pt-6">
                <h3 className={cabin.className + " font-bold text-4xl text-slate-700"}>{product?.title}</h3>
                <p className="mt-2 text-blue-500">{product?.country}</p>
                <p className={inter.className + " text-5xl font-bold mt-10 text-slate-600"}>${product?.price}</p>
                <hr className="w-[70px] mx-auto mt-6 h-[3px] rounded-full bg-blue-300"/>
                <p className="w-[600px] text-sm text-slate-600 mt-6 mx-auto">{product?.description}</p>
                <p className="px-4 py-1 bg-blue-400 text-white w-fit rounded-xl mx-auto mt-4">{product?.category}</p>
                <h4 className={cabin.className + " uppercase text-slate-700 mt-6"}>available colors</h4>
                <div className="flex justify-center gap-4 items-center mt-4">
                    { renderedColors }
                </div>
                <div className="flex items-center justify-center gap-4 mx-auto w-[200px] mt-10">
                    <Link className=" w-full py-2 justify-center  bg-blue-500 text-white rounded-lg hover:bg-slate-200 hover:text-black transition-all duration-200 inline-flex items-center gap-2" href={`/products/edit/${route.id}`}>
                        <span>Edit</span>
                        <i className="fa-regular fa-pen-to-square text-sm"></i>
                    </Link>
                    <ProductDeleteBtn id={product?.id || ''} title={product?.title || ''}/>
                </div>
            </div>
        </InnerContainer>
    );
}
 
export default SingleProductInfo;