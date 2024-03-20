'use client'
import axios from "axios";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

interface ProductDeleteBtnProps {
    id: string,
    title: string
}

const ProductDeleteBtn:React.FC<ProductDeleteBtnProps> = ({ title, id }) => {
    const router = useRouter()
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
                        // console.log(res.data)
                        router.push('/products')
                        window.location.reload()
                    })
            }
        })
    }
    return (
        <button onClick={showDeleteModal} className="py-2 w-full justify-center bg-slate-100  text-blue-500 rounded-lg hover:bg-slate-200 transition-all duration-200 inline-flex items-center gap-2">
            <span>Delete</span>
            <i className="fa-regular fa-trash-can text-md"></i>
        </button>
    );
}
 
export default ProductDeleteBtn;