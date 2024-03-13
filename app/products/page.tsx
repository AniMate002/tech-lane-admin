import { Metadata } from "next";
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