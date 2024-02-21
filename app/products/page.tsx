import OuterContainer from "@/components/Containers/OuterContainer";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Products",
    description: "Products page of Tech Lane Admin",
  };

const Products = () => {
    return (
        <div>
            <Link href={'/products/new'} className="text-white rounded-md bg-blue-500 px-8 py-4">Add new product</Link>
        </div>
    );
}
 
export default Products;