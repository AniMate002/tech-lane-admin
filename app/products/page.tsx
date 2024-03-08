import OuterContainer from "@/components/Containers/OuterContainer";
import ProductsList from "@/components/Products/ProductsList";
import { Product } from "@/models/Product";
import { mongooseConnect } from "@/models/mongoose";
import axios from "axios";
import { Metadata } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IProduct } from "./new/page";
import ProductsPage from "@/components/Products/ProductsPage";

// async function getProducts(){
//     mongooseConnect()
//     const products = await Product.find()
//     return products
// }

export const metadata: Metadata = {
    title: "Products - Tech Lane Admin",
    description: "Products page of Tech Lane Admin",
  };
  


const Products = async () => {
    // const products: Array<IProduct> = await getProducts()
    // console.log(products)
    return (
        <ProductsPage />
    );
}
 
export default Products;