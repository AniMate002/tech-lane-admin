'use client'

import Link from "next/link";
import ProductsList from "./ProductsList";
import { useEffect, useState } from "react";
import { IProduct } from "@/app/products/new/page";
import axios from "axios";
import ProductsSearchForm from "./ProductsSearchForm";
import { useSearchParams } from "next/navigation";


const ProductsPage = () => {
    const [sortedProducts, setSortedProducts] = useState<Array<IProduct>>([])
    const [products, setProducts] = useState<Array<IProduct>>()
    const searchParams = useSearchParams()

    useEffect(() => {
        const title = searchParams.get('title')
        if(title){
            axios.get('/api/products?title=' + title)
                .then(res => {
                    console.log(res.data.products)
                    setProducts(res.data.products)
                })
        }else {
            axios.get('/api/products')
                .then(res => setProducts(res.data))
        }
    }, [searchParams])

    if(!products){
        return <h1>Loading products...</h1>
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