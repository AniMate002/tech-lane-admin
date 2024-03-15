'use client'

import Link from "next/link";
import ProductsList from "./ProductsList";
import { useEffect, useState } from "react";
import { IProduct } from "@/app/products/new/page";
import axios from "axios";
import ProductsSearchForm from "./ProductsSearchForm";
import { useSearchParams } from "next/navigation";
import Loading from "../Reusable/Loading";
import ErrorComponent from "../Reusable/ErrorComponent";


const ProductsPage = () => {
    const [sortedProducts, setSortedProducts] = useState<Array<IProduct>>([])
    const [products, setProducts] = useState<Array<IProduct>>()
    const searchParams = useSearchParams()
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const title = searchParams.get('title')
        if(title){
            axios.get('/api/products?title=' + title)
                .then(res => {
                    setProducts(res.data.products)
                    setError(null)
                })
        }else {
            axios.get('/api/products')
                .then(res => {
                    setProducts(res.data)
                    setError(null)
                })
                .catch(e => {
                    const errorMessage = e instanceof Error ? e.message : "Unknown Error"
                    setError(errorMessage)
                })
        }
    }, [searchParams])

    if(error){
        return <ErrorComponent errorMessage={error}/>
    }
    if(!products){
        return <Loading title="Products"/>
    }
    return (
        <div>
            <Link href={'/products/new'} className="text-white rounded-md bg-blue-500 px-8 py-4 inline-flex items-center gap-2 hover:bg-blue-400 transition-all duration-200">
                <span>Add new product</span>
                <i className="fa-regular fa-square-plus"></i>
            </Link>
            <ProductsSearchForm setSortedProducts={setSortedProducts} products={products}/>
            <ProductsList products={sortedProducts.length === 0 ? products : sortedProducts}/>
        </div>
    );
}
 
export default ProductsPage;