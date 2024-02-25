import { cabin } from "@/app/layout";
import { IProduct } from "@/app/products/new/page";
import Image from "next/image";

interface ProductsCardProps {
    product: IProduct
}

const ProductsCard:React.FC<ProductsCardProps> = ({ product }) => {
    const image = product.image
    console.log("Singleproduct: ", image)
    return (
        <div className={cabin.className + " flex flex-col justify-between p-5 bg-white rounded-xl mt-10"}>
            <div>
                <div className="overflow-hidden w-[250px] h-[300px] flex items-center justify-center">
                    <img src={product.image} alt={product.description} className="rounded-xl min-w-max h-[300px]"/>
                </div>
                <div className="mt-4">
                    <h4 className="mt-4 font-bold text-xl hover:underline">{product.title}</h4>
                    <h5 className="text-sm mb-5">{(new Date()).getFullYear()}</h5>
                    <p className="w-[250px] text-slate-500 text-ellipsis mb-4 whitespace-nowrap overflow-hidden">{product.description}</p>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <a className="px-4 py-2 w-fit bg-black text-white rounded-xl hover:bg-slate-700 transition-all duration-200 inline-flex items-center gap-2" href={`/products/edit/${product.id}`}>
                    <span>Edit</span>
                    <i className="fa-regular fa-pen-to-square text-sm"></i>
                </a>
                <button className="px-4 py-2 w-fit bg-white  text-black rounded-xl hover:bg-slate-200 transition-all duration-200 inline-flex items-center gap-2">
                    <span>Delete</span>
                    <i className="fa-regular fa-trash-can text-md"></i>
                </button>
            </div>
        </div>
    );
}
 
export default ProductsCard;