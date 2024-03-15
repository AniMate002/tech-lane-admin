
import { Metadata } from "next";

import ProductsPage from "@/components/Products/ProductsPage";
import { Suspense } from "react";


export const metadata: Metadata = {
    title: "Products - Tech Lane Admin",
    description: "Products page of Tech Lane Admin",
  };
  


const Products = async () => {
    return (
        <Suspense>
            <ProductsPage />
        </Suspense>
    );
}
 
export default Products;