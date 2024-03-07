'use client'
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IProduct } from "../new/page";
import InnerContainer from "@/components/Containers/InnerContainer";
import { cabin, inter } from "@/app/layout";
import Link from "next/link";
import ProductDeleteBtn from "@/components/Products/ProductDeleteBtn";
import SingleProductInfo from "@/components/SingleProduct/SingleProductInfo";
import SingleProductGraph from "@/components/SingleProduct/SingleProductGraph";
import ContainerHeader from "@/components/Containers/ContainerHeader";
import SingleProductCommentsList from "@/components/SingleProduct/SingleProductCommentsList";
import SingleProductCommentsForm from "@/components/SingleProduct/SingleProductCommentsForm";

const SingleProductPage = () => {
    const route = useParams()
    const [product, setProduct] = useState<IProduct>()
    useEffect(() => {
        console.log(route.id)
        axios.get('/api/products?id=' + route.id).then(res => setProduct(res.data))
    }, [])
    const renderedColors = product?.colors?.map((color: string) => <div className={`w-[35px] h-[35px] rounded-full border-[1px] border-slate-200 ${color}Bg`} key={color} />)
    if(!product){
        return <h1>Loading...</h1>
    }
    return (
        <div>
            <SingleProductInfo {...product}/>
            <div className="flex justify-between mt-6 gap-6">
                <SingleProductGraph title={product.title}/>
                <InnerContainer className="flex-grow">
                    <ContainerHeader title="Comments"/>
                    <SingleProductCommentsList />
                    <SingleProductCommentsForm {...product}/>
                </InnerContainer>
            </div>
        </div>
    );
}
 
export default SingleProductPage;