import { IProduct } from "@/app/products/new/page";
import ProductsCard from "./ProductCard";


interface ProductsListProps {
    products: Array<IProduct>
}

const ProductsList:React.FC<ProductsListProps> = ({ products }) => {
    const renderedProducts = products.map(product => {
        return <ProductsCard key={product.id} product={product}/>
    })
    return (
        <div className="flex justify-around">
            { renderedProducts }
        </div>
    );
}
 
export default ProductsList;