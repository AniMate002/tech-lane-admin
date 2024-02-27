import { ICategory } from "@/models/Category";

interface CategoryCardProps{
    category: ICategory
}

const CategoryCard:React.FC<CategoryCardProps> = ({ category }) => {
    // console.log(category)
    return (
        <div className="w-[300px] bg-[#ebedff] rounded-b-xl">
            <div className="w-full h-[350px] bg-[#3399FF] flex items-center justify-center rounded-t-xl">
                <i className={`${category.svgCode} text-white text-9xl`}></i>
            </div>
            <div className="text-center text-slate-600 font-bold my-5 flex items-center justify-center gap-2">
                <span>{category?.parent}</span>
                {category.parent ? <i className="fa-solid fa-caret-right"></i> : ''}
                <span>{category.name}</span> 
            </div>
        </div>
    );
}
 
export default CategoryCard;