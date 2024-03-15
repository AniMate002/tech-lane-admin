"use client"

import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import ContainerHeader from "../Containers/ContainerHeader";
import InnerContainer from "../Containers/InnerContainer";
import axios from "axios";
import { useRouter } from "next/navigation";
import { IProduct } from "@/app/products/new/page";

interface ProductsSearchFormProps {
    setSortedProducts: Dispatch<SetStateAction<IProduct[]>>
    products: Array<IProduct>
}

const ProductsSearchForm:React.FC<ProductsSearchFormProps> = ({ setSortedProducts, products }) => {
    const [title, setTitle] = useState<string>('')
    const [sortByPrice, setSortByPrice] = useState<string>('sort')
    const [sortByTitle, setSortByTitle] = useState<string>('sort')
    const router = useRouter()
    function searchFormSubmitHandler(e: FormEvent<HTMLFormElement>){
        e.preventDefault()
        if(title){
            router.push('/products?title=' + title)
        }else{
            router.push('/products')
        }
    }
    function sortByPriceHandler(){
        let sortedProducts: Array<IProduct> = [];
        setSortByTitle('sort')
        if(sortByPrice === 'sort'){
            setSortByPrice('sort-down');
            sortedProducts = [...products].sort((a, b) => a.price - b.price);
        } else if(sortByPrice === 'sort-down'){
            setSortByPrice('sort-up');
            sortedProducts = [...products].sort((a, b) => b.price - a.price);
        } else {
            setSortByPrice('sort');
            sortedProducts = [];
        }
        setSortedProducts(sortedProducts);
    }

    function sortByTextHandler(){
        let sortedProducts: Array<IProduct> = [];
        setSortByPrice('sort')
        if(sortByTitle === 'sort'){
            setSortByTitle('sort-down');
            sortedProducts = [...products].sort((a, b) => a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1);
        } else if(sortByTitle === 'sort-down'){
            setSortByTitle('sort-up');
            sortedProducts = [...products].sort((a, b) => a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1);
        } else {
            setSortByTitle('sort');
            sortedProducts = [];
        }
        setSortedProducts(sortedProducts);
    }
    return (
        <InnerContainer className="mt-4">
            <ContainerHeader title="Search for product"/>
            <div className="flex items-baseline gap-10
            flex-col
            md:flex-row
            ">
                <form onSubmit={e => searchFormSubmitHandler(e)}>
                    <label className="flex gap-4 mt-2
                    flex-col
                    md:flex-row md:items-center
                    ">
                        <span className="text-blue-300 inline-flex justify-center items-center py-2 w-[100px] bg-slate-100 rounded-lg font-bold">Search:</span>
                        <input value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="I'm searching for..." className="rounded-lg border-2 px-4 py-2 lg:w-[200px] xl:w-[400px] w-[250px]"/>
                    </label>
                    <button type="submit" className="flex items-center gap-2 text-white bg-blue-500 px-4 py-2 rounded-lg mt-4 hover:bg-blue-400 transition-all duration-200">
                        Search
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </form>
                <div className="flex gap-4 items-center flex-wrap">
                    <span className="text-blue-300 inline-flex justify-center items-center py-2 w-[100px] bg-slate-100 rounded-lg font-bold">Sort by:</span>
                    <button onClick={sortByPriceHandler} className=" text-slate-400 border-b-2 border-slate-400 px-4 py-1 flex items-center gap-2">
                        <span>Price</span>
                        <i className={`fa-solid fa-${sortByPrice}`}></i>
                    </button>
                    <button onClick={sortByTextHandler} className=" text-slate-400 border-b-2 border-slate-400 px-4 py-1 flex items-center gap-2">
                        <span>A - Z</span>
                        <i className={`fa-solid fa-${sortByTitle}`}></i>
                    </button>
                </div>
            </div>
        </InnerContainer>
    );
}
 
export default ProductsSearchForm;