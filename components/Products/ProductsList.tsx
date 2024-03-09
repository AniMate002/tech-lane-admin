'use client'
import { IProduct } from "@/app/products/new/page";
import ProductsCard from "./ProductCard";


interface ProductsListProps {
    products: Array<IProduct>
}

const ProductsList:React.FC<ProductsListProps> = ({ products }) => {
    const renderedProducts = products.map(product => {
        return <ProductsCard key={product._id} product={product}/>
    })
    return (
        <div>
            <div className="flex justify-between flex-wrap mt-4">
                { renderedProducts }
            </div>
        </div>
    );
}
 
export default ProductsList;