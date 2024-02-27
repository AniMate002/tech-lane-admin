import CategoriesForm from "@/components/Categories/CategoriesForm";
import CategoriesList from "@/components/Categories/CategoriesList";
import InnerContainer from "@/components/Containers/InnerContainer";
import { Category, ICategory } from "@/models/Category";
import { mongooseConnect } from "@/models/mongoose";

async function getCategories(){
    await mongooseConnect()
    const categories = await Category.find()
    return categories
}

const Categories = async () => {
    const categories: Array<ICategory> = await getCategories() 
    return (
        <div>
            <InnerContainer>
                <CategoriesForm categories={categories}/>
            </InnerContainer>
            <InnerContainer className="mt-20">
                <CategoriesList categories={categories}/>
            </InnerContainer>
        </div>
    );
}
 
export default Categories;