// 'use client'
import { IProduct } from "@/app/products/new/page";
import ProductDeleteBtn from "./ProductDeleteBtn";
import Link from "next/link";
import { cabin, nunito } from "@/app/layout";
import Image from "next/image";

interface ProductsCardProps {
    product: IProduct
}

const ProductsCard:React.FC<ProductsCardProps> = ({ product }) => {
    const renderedColors = product.colors.map((color: string) => <div className={`w-[25px] h-[25px] rounded-full border-[1px] border-slate-200 ${color}Bg`} key={color} />)
    return (
        <div className={cabin.className + " flex flex-col justify-between p-5 bg-white rounded-xl mb-10"}>
            <div>
                <Link href={`/products/${product._id}`} className="overflow-hidden w-[260px] h-[300px] flex items-center rounded-xl justify-center">
                    <Image width={250} height={300} quality={100} src={product.image} alt={product.description} className="min-h-[300px] min-w-[250px]"/>
                </Link>
                <div className="mt-4">
                    <div className="flex mt-4 justify-between items-center">
                        <Link href={`/products/${product._id}`} className="font-bold hover:underline text-xl">{product.title}</Link>
                        <h5 className="text-sm">{(new Date()).getFullYear()}</h5>
                    </div>
                    <p className="mt-2 text-blue-500">{product.category}</p>
                    <p className="w-[250px] text-sm text-slate-500 text-ellipsis mb-4 whitespace-nowrap overflow-hidden">{product.description}</p>
                    <p className={nunito.className + " font-bold"}>${product.price}.00</p>
                    <div className="flex gap-2 items-center my-4">
                        { renderedColors }
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <a className="w-full py-2 justify-center  bg-blue-500 text-white rounded-lg hover:bg-slate-200 hover:text-black transition-all duration-200 inline-flex items-center gap-2" href={`/products/edit/${product._id}`}>
                    <span>Edit</span>
                    <i className="fa-regular fa-pen-to-square text-sm"></i>
                </a>
                <ProductDeleteBtn id={product._id || ''} title={product.title}/>
            </div>
        </div>
    );
}
 
export default ProductsCard;