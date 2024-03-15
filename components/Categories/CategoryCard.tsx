'use client'
import { ICategory } from "@/models/Category";
import axios from "axios";
import CategoryDeleteBtn from "./CategoryDeleteBtn";

interface CategoryCardProps{
    category: ICategory
}

const CategoryCard:React.FC<CategoryCardProps> = ({ category }) => {
    // console.log(category)
    return (
        <div className="w-[300px] bg-[#ebedff] rounded-b-xl rounded-t-xl overflow-hidden">
            <div className="w-full h-[350px] bg-[#3399FF] flex items-center justify-center relative">
                <CategoryDeleteBtn category={category}/>
                <i className={`${category.svgCode} text-white text-9xl`}></i>
                <a href={`/categories/edit/${category._id}`} className="absolute bottom-2 left-[50%] translate-x-[-50%] text-white opacity-[0.7] hover:opacity-[1] transition-all duration-200 font-bold flex items-center gap-2">
                    <span>Edit</span>
                    <i className="fa-regular fa-pen-to-square"></i>
                </a>
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