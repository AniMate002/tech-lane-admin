"use client"
import { FormEvent, useEffect, useState } from "react"
import BlueBtn from "../Reusable/BlueBtn"
import { ICategory } from "@/models/Category"
import { usePathname, useRouter } from "next/navigation"
import axios from "axios"
import ErrorComponent from "../Reusable/ErrorComponent"

interface EditCategoryFormProps {
    categories: Array<ICategory>
}

export const getIdClient = (pathname: string) => pathname.split('/')[pathname.split('/').length -1]

const EditCategoryForm:React.FC<EditCategoryFormProps> = ({ categories }) => {
    const pathname = usePathname()
    const router = useRouter()
    const [error, setError] = useState<string | null>(null)
    const [name, setName] = useState<string>('')
    const [svgCode, setSvg] = useState<string>('')
    const [parent, setParent] = useState<string>('')
    useEffect(() => {
        const id = getIdClient(pathname)
        const categoryToEdit = categories.find(cat => cat._id == id)
        if(categoryToEdit){
            setName(categoryToEdit?.name)
            setSvg(categoryToEdit.svgCode)
            setParent(categoryToEdit.parent)
        }

    }, [categories, pathname])
    const renderedCatOptions = categories.map(category => {
        return <option key={category._id} value={category.name}>{category.name}</option>
    })
    async function formHandler(e: FormEvent<HTMLFormElement>){
        e.preventDefault()
        try{
            const response = await axios.put(`/api/categories/edit/${getIdClient(pathname)}`, {name, svgCode, parent})
            await router.replace('/categories')
        }catch(e){
            const errorMessage = e instanceof Error ? e.message : "Unknown Error"
            setError(errorMessage)
        }
    }
    if(error){
        return <ErrorComponent errorMessage={error}/>
    }
    return (
        <form onSubmit={e => formHandler(e)}>
            <h3 className="text-xl text-slate-600 text-center uppercase font-bold">Edit category</h3>
            <hr className="my-12"/>
            <div className="flex
            flex-wrap justify-center gap-4 items-center
            lg:flex-nowrap lg:justify-around
            ">
                <label>
                    <p className="text-slate-500 text-xl">Name</p>
                    <hr className="w-[300px] lg:my-4 my-2"/>
                    <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Category name..." className="mt-2 rounded-lg border-2 px-4 py-2 w-[300px]"/>
                </label>
                <label>
                    <p className="text-slate-500 text-xl">Parent category</p>
                    <hr className="w-[300px] lg:my-4 my-2"/>
                    <select value={parent} onChange={e => setParent(e.target.value)} className="mt-2 rounded-lg border-2 px-4 py-2 w-[300px] focus:outline-0">
                        <option value="">No parent</option>
                        { renderedCatOptions }
                    </select>
                </label>
                <label>
                    <p className="text-slate-500 text-xl">SVG code</p>
                    <hr className="w-[300px] lg:my-4 my-2"/>
                    <input value={svgCode} onChange={e => setSvg(e.target.value)} placeholder="SVG code..." className="mt-2 rounded-lg border-2 px-4 py-2 w-[300px] md:w-[400px] focus:outline-0" />
                </label>
            </div>
            <BlueBtn type="submit" className="mx-auto mt-10">
                <span>Update category</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                </svg>
            </BlueBtn>
        </form>
    );
}
 
export default EditCategoryForm;