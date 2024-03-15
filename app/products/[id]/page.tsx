'use client'
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IProduct } from "../new/page";
import InnerContainer from "@/components/Containers/InnerContainer";
import SingleProductInfo from "@/components/SingleProduct/SingleProductInfo";
import SingleProductGraph from "@/components/SingleProduct/SingleProductGraph";
import ContainerHeader from "@/components/Containers/ContainerHeader";
import SingleProductCommentsList from "@/components/SingleProduct/SingleProductCommentsList";
import SingleProductCommentsForm from "@/components/SingleProduct/SingleProductCommentsForm";
import Loading from "@/components/Reusable/Loading";
import ErrorComponent from "@/components/Reusable/ErrorComponent";



const SingleProductPage = () => {
    const route = useParams()
    const [product, setProduct] = useState<IProduct>()
    const [error, setError] = useState<string | null>(null)
    useEffect(() => {
        console.log(route.id)
        axios.get('/api/products?id=' + route.id)
            .then(res => {
                setProduct(res.data)
                setError(null)
            })
            .catch(e => {
                const errorMessage = e instanceof Error ? e.message : "Unknown Error"
                setError(errorMessage)
            })
    }, [route.id])
    if(error){
        return <ErrorComponent errorMessage={error}/>
    }
    if(!product){
        return <Loading title={"product: " + route.id}/>
    }
    return (
        <div>
            <SingleProductInfo {...product}/>
            <div className="flex justify-between mt-6 gap-6">
                <SingleProductGraph title={product.title}/>
                <InnerContainer className="flex-grow">
                    <ContainerHeader title="Comments"/>
                    <SingleProductCommentsList {...product}/>
                    <SingleProductCommentsForm {...product}/>
                </InnerContainer>
            </div>
        </div>
    );
}
 
export default SingleProductPage;