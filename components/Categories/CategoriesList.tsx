import { ICategory } from "@/models/Category";
import InnerContainer from "../Containers/InnerContainer";
import CategoryCard from "./CategoryCard";

interface CategoriesListProps {
    categories: Array<ICategory>
}

const CategoriesList:React.FC<CategoriesListProps> = ({ categories }) => {
    const renderedCategories = categories.map(category => {
        return <CategoryCard key={category.name} category={category}/>
    })
    return (
        <div>
            <h3 className="text-xl text-slate-600 text-center uppercase font-bold">All categories</h3>
            <hr className="my-12"/>
            <div className="flex flex-wrap justify-center gap-10">
                { renderedCategories }
            </div>
        </div>
    );
}
 
export default CategoriesList;