'use client'
import CategoriesForm from "@/components/Categories/CategoriesForm";
import CategoriesList from "@/components/Categories/CategoriesList";
import InnerContainer from "@/components/Containers/InnerContainer";
import ErrorComponent from "@/components/Reusable/ErrorComponent";
import Loading from "@/components/Reusable/Loading";
import { ICategory } from "@/models/Category";
import axios from "axios";
import { useEffect, useState } from "react";

// async function getCategories(){
//     await mongooseConnect()
//     const categories = await Category.find()
//     return categories
// }

const Categories = () => {
    // const categories: Array<ICategory> = await getCategories() 
    const [categories, setCategories] = useState<Array<ICategory>>()
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        axios.get('/api/categories')
            .then(res => {
                setCategories(res.data)
                setError(null)
            })
            .catch(e => {
                const errorMessage = e instanceof Error ? e.message : "Unknown Error"
                setError(errorMessage)
            })
    }, [])

    if(error){
        return <ErrorComponent errorMessage={error}/>
    }

    if(!categories){
        return <Loading title="Loading categories"/>
    }    
    return (
        <div>
            <InnerContainer>
                <CategoriesForm categories={categories}/>
            </InnerContainer>
            <InnerContainer className="mt-20">
                <CategoriesList categories={categories}/>
            </InnerContainer>
        </div>
    );
}
 
export default Categories;