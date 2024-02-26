'use client'
import axios from "axios";
import Swal from "sweetalert2";

interface ProductDeleteBtnProps {
    id: string,
    title: string
}

const ProductDeleteBtn:React.FC<ProductDeleteBtnProps> = ({ title, id }) => {
    function showDeleteModal(){
        Swal.fire({
            title: 'Hmmm...',
            text: `Are you sure you want to delete product: ${title}`,
            icon: 'warning',
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonText: 'Delete',
            confirmButtonColor: '#e23237'
        }).then(data => {
            if(data.isConfirmed){
                axios.delete(`/api/products/delete/${id}`)
                    .then(res => {
                        console.log(res.data)
                        window.location.reload()
                    })
            }
        })
    }
    return (
        <button onClick={showDeleteModal} className="px-4 py-2 w-fit bg-white  text-black rounded-xl hover:bg-slate-200 transition-all duration-200 inline-flex items-center gap-2">
            <span>Delete</span>
            <i className="fa-regular fa-trash-can text-md"></i>
        </button>
    );
}
 
export default ProductDeleteBtn;