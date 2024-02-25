'use client'

import InnerContainer from "@/components/Containers/InnerContainer";
import axios from "axios";
import { useRouter, usePathname } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { IProduct } from "../../new/page";

async function getProduct(_id: string):Promise<IProduct>{
    const res = await axios.get(`/api/products/edit/${_id}`)
    const product = res.data as IProduct
    return product
}

const ProductEdit = () => {
    const router = useRouter()
    const pathname = usePathname()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [country, setCountry] = useState('')
    const [image, setImage] = useState('')
    async function formSubmitHandler(e:FormEvent<HTMLFormElement>){
        e.preventDefault()
        const quer = pathname.split('/')
        const _id = quer[quer.length - 1]
        const updatedProduct = {title, description, price, country, image}
        axios.put(`/api/products/edit/${_id}`, updatedProduct)
            .then(() => router.push('/products'))

        // console.log("Current ID: ", { _id })
    }
    useEffect(() => {
        const quer = pathname.split('/')
        const _id = quer[quer.length - 1]
        getProduct(_id)
            .then(product => {
                setTitle(product.title)
                setDescription(product.description)
                setPrice(product.price)
                setCountry(product.country)
                setCountry(product.country)
                setImage(product.image)
            })
        
    }, [])
    return (
        <form onSubmit={e => formSubmitHandler(e)}>
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
                <InnerContainer title="Image" className="w-[500px]">
                    <input name="image" value={image} onChange={e => setImage(e.target.value)} type="text" placeholder="Link to image..." className="mt-8 rounded-lg border-2 px-4 py-2 w-full"/>
                </InnerContainer>
            </div>
            <button type="submit" className="block mx-auto  mt-4 px-8 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 shadow-md shadow-blue-400 hover:shadow-lg hover:shadow-blue-500 transition-all duration-200 text-white rounded-xl">Save</button>
        </form>
    );
}
 
export default ProductEdit;