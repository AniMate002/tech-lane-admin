import EditCategoryForm from "@/components/Categories/EditCategoryForm";
import InnerContainer from "@/components/Containers/InnerContainer";
import { Category } from "@/models/Category";
import { mongooseConnect } from "@/models/mongoose";

async function getCategories() {
    await mongooseConnect()
    const categories = await Category.find()
    return categories 
}

const EditCategory = async () => {
    const categories = await getCategories()
    return (
        <div>
            <InnerContainer>
                <EditCategoryForm categories={categories}/>
            </InnerContainer>
        </div>
    );
}
 
export default EditCategory;