"use client"
import InnerContainer from "@/components/Containers/InnerContainer";
import { SyntheticEvent, useState } from "react";


const NewProduct = () => {
    const formSubmitHadler = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
    }
    return (
        <form onSubmit={e => formSubmitHadler(e)}>
            <div className="flex flex-wrap justify-center gap-10 w-full">
                <InnerContainer title="Product name" className="w-[500px]">
                    <input type="text" placeholder="Product name..." className="mt-8 rounded-lg border-2 px-4 py-2 w-full"/>
                </InnerContainer>
                <InnerContainer title="Description" className="w-[500px]">
                    <input type="text" placeholder="Description..." className="mt-8 rounded-lg border-2 px-4 py-2 w-full"/>
                </InnerContainer>
                <InnerContainer title="Price (in USD) " className="w-[500px]">
                    <input type="number" placeholder="Price..." className="mt-8 rounded-lg border-2 px-4 py-2 w-full"/>
                </InnerContainer>
                <InnerContainer title="Country" className="w-[500px]">
                    <input type="text" placeholder="Country..." className="mt-8 rounded-lg border-2 px-4 py-2 w-full"/>
                </InnerContainer>
            </div>
            <button type="submit" className="block mx-auto  mt-4 px-8 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 shadow-md shadow-blue-400 hover:shadow-lg hover:shadow-blue-500 transition-all duration-200 text-white rounded-xl">Save</button>
        </form>
    );
}
 
export default NewProduct;