'use client'

import InnerContainer from "@/components/Containers/InnerContainer";
import axios from "axios";
import { useRouter, usePathname } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { ICategory } from "@/models/Category";
import { IProduct } from "@/app/products/new/page";
import Loading from "@/components/Reusable/Loading";
import ErrorComponent from "@/components/Reusable/ErrorComponent";


async function getProduct(_id: string):Promise<IProduct>{
    const res = await axios.get(`/api/products/edit/${_id}`)
    const product = res.data as IProduct
    return product
}

async function getCategories():Promise<Array<ICategory>>{
    const res = await axios.get('/api/categories')
    const data = res.data as Array<ICategory>
    return data
}



const EditProductForm = () => {
    const router = useRouter()
    const pathname = usePathname()
    const [error, setError] = useState<string | null>(null)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [country, setCountry] = useState('')
    const [image, setImage] = useState('')
    const [category, setCategory] = useState<string>('')
    const [colors, setColors] = useState<Array<string>>([])
    const [memories, setMemories] = useState<Array<number>>([])
    const [categories, setCategories] = useState<Array<ICategory> | null>(null)
    const AllColors = ['white','gray','rose','orange','sky','black']
    const AllMemories = [32,64,128,256,512,1024]
    const renderColors = (colors: Array<string>) => {
        return colors.map(color => {
            return <div key={color} onClick={() => addColor(color)} className={`w-[30px] h-[30px] block ${color}Bg rounded-full border-2 border-slate-200 hover:border-slate-300 cursor-pointer`}></div>
        })
    }
    const renderMemories = (memories: Array<number>) => {
        return memories.map(memory => {
            return <div onClick={() => addMemory(memory)} key={memory} className="cursor-pointer bg-slate-100 text-blue-400 text-sm hover:outline-1 hover:outline hover:outline-slate-200 p-1 rounded-lg">{memory}GB</div>
        })
    }

    function addColor(color: string){
        if(!colors.includes(color)){
            setColors(prev => [...prev, color])
        }else{
            const filteredColors = colors.filter(col => col !== color)
            setColors(filteredColors)
        }
    }
    function addMemory(memory: number){
        if(!memories.includes(memory)){
            setMemories(prev => [...prev, memory])
        }else{
            const filterdMemories = memories.filter(mem => mem !== memory)
            setMemories(filterdMemories)
        }
        setMemories(prev => prev.sort((a, b) => a - b))
    }
    async function formSubmitHandler(e:FormEvent<HTMLFormElement>){
        e.preventDefault()
        const quer = pathname.split('/')
        const _id = quer[quer.length - 1]
        const updatedProduct = {title, description, price, country, image, category, colors, memories}
        axios.put(`/api/products/edit/${_id}`, updatedProduct)
            .then(() => router.replace('/products'))
            .catch(e => {
                const errorMessage = e instanceof Error ? e.message : "Unknown Error"
                setError(errorMessage)
            })

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
                setCategory(product.category)
                setColors(product.colors)
                setMemories(product.memories)
            })
            .catch(e => {
                const errorMessage = e instanceof Error ? e.message : "Unknown Error"
                setError(errorMessage)
            }) 
        
        getCategories()
            .then(cat => {
                setCategories(cat)
            })
            .catch(e => {
                const errorMessage = e instanceof Error ? e.message : "Unknown Error"
                setError(errorMessage)
            }) 
        
    }, [pathname])

    if(!title && !description && !price && !country && !image && !categories && colors.length === 0 && memories.length === 0 ){
        const quer = pathname.split('/')
        const _id = quer[quer.length - 1]
        return <Loading title={"Product: " + _id}/>
    }

    if(error){
        return <ErrorComponent errorMessage={error}/>
    }

    const renderedCategories = categories?.map(cat => {
        return <option key={cat.name} value={cat.name}>{cat.name}</option>
    })
    return (
        <form onSubmit={e => formSubmitHandler(e)}>
            <div className="flex flex-wrap justify-center gap-10 w-full">
                <InnerContainer title="Product name" className="w-[500px]">
                    <input name="title" value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="Product name..." className="mt-8 rounded-lg border-2 px-4 py-2 w-full"/>
                </InnerContainer>
                <InnerContainer title="Category" className="w-[500px]">
                    <select value={category} onChange={e => setCategory(e.target.value)} className="mt-8 rounded-lg border-2 px-4 py-2 w-full">
                        <option value="">Uncategorized</option>
                        { renderedCategories }
                    </select>
                </InnerContainer>
                <InnerContainer className="w-[500px]" title="Colors">
                    <p className="mt-4 mb-1 text-gray-500">Selected colors</p>
                    <div className="flex items-center gap-2">
                        { colors.length > 0 ? renderColors(colors) : <p className="text-slate-400 text-sm">No colors selected...</p> }
                    </div>
                    <p className="mt-4 mb-1 text-gray-500">All colors</p>
                    <div className="flex items-center gap-2">
                        { renderColors(AllColors) }
                    </div>
                </InnerContainer>
                <InnerContainer className="w-[500px]" title="Memory">
                    <p className="mt-4 mb-1 text-gray-500">Selected memory</p>
                    <div className="flex items-center gap-2">
                        { memories.length > 0 ? renderMemories(memories) : <p className="text-slate-400 text-sm">No memory selected...</p>}
                    </div>
                    <p className="mt-4 mb-1 text-gray-500">All memories</p>
                    <div className="flex items-center gap-2">
                        { renderMemories(AllMemories) }
                    </div>
                </InnerContainer>
                <InnerContainer title="Description" className="w-[500px]">
                    <textarea name="description" value={description} onChange={e => setDescription(e.target.value)} placeholder="Description..." className="mt-8 rounded-lg border-2 px-4 py-2 w-full"></textarea>
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
 
export default EditProductForm;