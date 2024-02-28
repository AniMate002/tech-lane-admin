"use client"
import InnerContainer from "@/components/Containers/InnerContainer";
import { ICategory } from "@/models/Category";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState, FormEvent, useEffect } from "react";

export interface IProduct {
    id?: string,
    title: string,
    description: string,
    price: number,
    country: string,
    image: string,
    category: string
}



const NewProduct = () => {
    const router = useRouter()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [country, setCountry] = useState('')
    const [image, setImage] = useState('')
    const [category, setCategory] = useState('')
    const [categories, setCategories] = useState<Array<ICategory> | null>(null)
    async function formSubmitHadler (e: FormEvent<HTMLFormElement>){
        e.preventDefault()
        const newObj: IProduct = {title, description, price, country, image, category}
        await axios.post('/api/products', newObj)
        await router.push('/products')
    }

    useEffect(() => {
        axios.get('/api/categories').then(res => {
            setCategories(res.data)
        })
    }, [])

    const renderedCategories = categories?.map(cat => {
        return <option key={cat.name} value={cat.name}>{cat.name}</option>
    })
    return (
        <form onSubmit={e => formSubmitHadler(e)} method="post" action={'/products'}>
            <div className="flex flex-wrap justify-center gap-10 w-full">
                <InnerContainer title="Product name" className="w-[500px]">
                    <input name="title" value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="Product name..." className="mt-8 rounded-lg border-2 px-4 py-2 w-full"/>
                </InnerContainer>
                <InnerContainer title="Category" className="w-[500px]">
                    <select value={category} onChange={e => setCategory(e.target.value)} className="mt-8 rounded-lg border-2 px-4 py-2 w-full">
                        <option value=''>Uncategorized</option>
                        { renderedCategories }
                    </select>
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
 
export default NewProduct;