import { Category, ICategory } from "@/models/Category";
import { mongooseConnect } from "@/models/mongoose";
import axios from "axios";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import Swal from "sweetalert2";

interface CategoryDeleteBtnProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    category: ICategory
}

const CategoryDeleteBtn:React.FC<CategoryDeleteBtnProps> = ({ category, className, ...props}) => {
    function deleteCategoryHandler(){
        Swal.fire({
            title: 'Hmmm...',
            text: `Are you sure you want to delete category "${category.name}"`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            showCloseButton: true,
            confirmButtonColor: '#e23237'
        }).then(data => {
            if(data.isConfirmed){
                axios.delete(`/api/categories/delete/${category._id}`).then(() => window.location.reload())
            }
        })
    }
    return (
        <button {...props} onClick={deleteCategoryHandler} className={`absolute right-3 top-2 text-white text-xl opacity-[0.7] hover:opacity-[1] transition-all duration-200 ${className}`}>
            <i className="fa-solid fa-xmark"></i>
        </button>
    );
}
 
export default CategoryDeleteBtn;