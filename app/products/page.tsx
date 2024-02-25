import OuterContainer from "@/components/Containers/OuterContainer";
import ProductsList from "@/components/Products/ProductsList";
import { Product } from "@/models/Product";
import { mongooseConnect } from "@/models/mongoose";
import axios from "axios";
import { Metadata } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IProduct } from "./new/page";

async function getProducts(){
    mongooseConnect()
    const products = await Product.find()
    return products
}


const Products = async () => {
    const products: Array<IProduct> = await getProducts()
    console.log(products)
    return (
        <div>
            <Link href={'/products/new'} className="text-white rounded-md bg-blue-500 px-8 py-4 inline-flex items-center gap-2 hover:bg-blue-400 transition-all duration-200">
                <span>Add new product</span>
                <i className="fa-regular fa-square-plus"></i>
            </Link>
            <ProductsList products={products}/>
        </div>
    );
}
 
export default Products;