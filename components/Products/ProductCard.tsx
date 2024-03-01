// 'use client'
import { cabin } from "@/app/layout";
import { IProduct } from "@/app/products/new/page";
import ProductDeleteBtn from "./ProductDeleteBtn";

interface ProductsCardProps {
    product: IProduct
}

const ProductsCard:React.FC<ProductsCardProps> = ({ product }) => {
    
    return (
        <div className={cabin.className + " flex flex-col justify-between p-5 bg-white rounded-xl mt-10"}>
            <div>
                <div className="overflow-hidden w-[250px] h-[300px] flex items-center rounded-xl justify-center">
                    <img src={product.image} alt={product.description} className="min-h-[300px] max-h-[300px] min-w-[250px]"/>
                </div>
                <div className="mt-4">
                    <h4 className="mt-4 font-bold text-xl hover:underline">{product.title}</h4>
                    <h5 className="text-sm">{(new Date()).getFullYear()}</h5>
                    <p className="mt-2 text-blue-500">{product.category}</p>
                    <p className="w-[250px] text-slate-500 text-ellipsis mb-4 whitespace-nowrap overflow-hidden">{product.description}</p>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <a className="w-full py-2 justify-center  bg-blue-500 text-white rounded-lg hover:bg-slate-200 hover:text-black transition-all duration-200 inline-flex items-center gap-2" href={`/products/edit/${product.id}`}>
                    <span>Edit</span>
                    <i className="fa-regular fa-pen-to-square text-sm"></i>
                </a>
                <ProductDeleteBtn id={product.id || ''} title={product.title}/>
            </div>
        </div>
    );
}
 
export default ProductsCard;