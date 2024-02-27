'use client'

import { FormEvent, useState } from "react";
import BlueBtn from "../Reusable/BlueBtn";
import axios from "axios";
import { ICategory } from "@/models/Category";

interface CategoriesFormProps {
    categories: Array<ICategory>
}

const CategoriesForm:React.FC<CategoriesFormProps> = ({ categories }) => {
    const [name, setName] = useState<string>('')
    const [svgCode, setSvg] = useState<string>('')
    const [parent, setParent] = useState<string>('')
    async function addCategoryHandler(e: FormEvent<HTMLFormElement>){
        e.preventDefault()
        const res = await axios.post('/api/categories', { name, svgCode, parent })
        window.location.reload()
    }

    const renderedCatOptions = categories.map(category => {
        return <option key={category._id} value={category.name}>{category.name}</option>
    })
    return (
        <form onSubmit={e => addCategoryHandler(e)}>
            <h3 className="text-xl text-slate-600 text-center uppercase font-bold">Add new category</h3>
            <hr className="my-12"/>
            <div className="flex justify-around">
                <label>
                    <p className="text-slate-500 text-xl">Name</p>
                    <hr className="w-[300px] my-4"/>
                    <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Category name..." className="mt-2 rounded-lg border-2 px-4 py-2 w-[300px]"/>
                </label>
                <label>
                    <p className="text-slate-500 text-xl">Parent category</p>
                    <hr className="w-[300px] my-4"/>
                    <select value={parent} onChange={e => setParent(e.target.value)} className="mt-2 rounded-lg border-2 px-4 py-2 w-[300px] focus:outline-0">
                        <option value="">No parent</option>
                        { renderedCatOptions }
                    </select>
                </label>
                <label>
                    <p className="text-slate-500 text-xl">SVG code</p>
                    <hr className="w-[300px] my-4"/>
                    <textarea value={svgCode} onChange={e => setSvg(e.target.value)} placeholder="SVG code..." className="mt-2 rounded-lg border-2 px-4 py-2 w-[400px] focus:outline-0"></textarea>
                </label>
            </div>
            <BlueBtn type="submit" className="mx-auto mt-10">
                <span>Add category</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                </svg>
            </BlueBtn>
        </form>
    );
}
 
export default CategoriesForm;