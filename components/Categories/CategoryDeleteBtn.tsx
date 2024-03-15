import { ICategory } from "@/models/Category";
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
                axios
                    .delete(`/api/categories/delete/${category._id}`).then(() => window.location.reload())
                    .catch(e => {
                        const errorMessage = e instanceof Error ? e.message : "Unknown Error"
                        Swal.fire({
                            title: "Ooops...",
                            text: "Category was not deleted due to unexprected Error: " + errorMessage,
                            icon: "error",
                            confirmButtonColor: "#e23237"
                        })
                    })
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