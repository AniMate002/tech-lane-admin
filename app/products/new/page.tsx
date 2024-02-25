"use client"
import InnerContainer from "@/components/Containers/InnerContainer";
import axios from "axios";
import { useState, FormEvent } from "react";

export interface IProduct {
    title: string,
    description: string,
    price: number,
    country: string
}

const NewProduct = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [country, setCountry] = useState('')
    async function formSubmitHadler (e: FormEvent<HTMLFormElement>){
        e.preventDefault()
        const newObj: IProduct = {title, description, price, country}
        // console.log('NewObj: ', newObj)
        // console.log(newObj)
        await axios.post('/api/products', newObj)
        // await axios.get('/api')
        // await axios.post('/api', newObj)
    }
    return (
        <form onSubmit={e => formSubmitHadler(e)} method="post" action={'/products/new'}>
            <div className="flex flex-wrap justify-center gap-10 w-full">
                <InnerContainer title="Product name" className="w-[500px]">
                    <input name="title" value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="Product name..." className="mt-8 rounded-lg border-2 px-4 py-2 w-full"/>
                </InnerContainer>
                <InnerContainer title="Description" className="w-[500px]">
                    <input name="description" value={description} onChange={e => setDescription(e.target.value)} type="text" placeholder="Description..." className="mt-8 rounded-lg border-2 px-4 py-2 w-full"/>
                </InnerContainer>
                <InnerContainer title="Price (in USD) " className="w-[500px]">
                    <input name="price" value={price} onChange={e => setPrice(Number(e.target.value))} type="number" placeholder="Price..." className="mt-8 rounded-lg border-2 px-4 py-2 w-full"/>
                </InnerContainer>
                <InnerContainer title="Country" className="w-[500px]">
                    <input name="country" value={country} onChange={e => setCountry(e.target.value)} type="text" placeholder="Country..." className="mt-8 rounded-lg border-2 px-4 py-2 w-full"/>
                </InnerContainer>
            </div>
            <button type="submit" className="block mx-auto  mt-4 px-8 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 shadow-md shadow-blue-400 hover:shadow-lg hover:shadow-blue-500 transition-all duration-200 text-white rounded-xl">Save</button>
        </form>
    );
}
 
export default NewProduct;