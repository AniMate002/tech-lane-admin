"use client"

import EditCategoryForm from "@/components/Categories/EditCategoryForm";
import InnerContainer from "@/components/Containers/InnerContainer";
import ErrorComponent from "@/components/Reusable/ErrorComponent";
import Loading from "@/components/Reusable/Loading";
import { Category, ICategory } from "@/models/Category";
import { mongooseConnect } from "@/models/mongoose";
import axios from "axios";
import { useEffect, useState } from "react";

const EditCategoryPage = () => {
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
                <EditCategoryForm categories={categories}/>
            </InnerContainer>
        </div>
    );
}
 
export default EditCategoryPage;