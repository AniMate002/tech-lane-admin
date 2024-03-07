import { cabin } from "@/app/layout";
import { IComment, IProduct } from "@/app/products/new/page";
import axios from "axios";
import { comment } from "postcss";
import Swal from "sweetalert2";

interface SingleProductCommentsListProps extends IProduct {}

const SingleProductCommentsList:React.FC<SingleProductCommentsListProps> = ( product ) => {
    const { comments } = product
    const rederedComments = comments?.map(comment => (
        <div key={comment._id} className="border-l-2 px-2 border-blue-500">
            <div className="flex items-center justify-between">
                <div>
                    <p className={cabin.className + " font-bold text-blue-500"}>{comment.author}</p>
                    <p className="text-sm text-slate-500">{comment.createdAt}</p>
                </div>
                <button onClick={() => deleteCommentHandler(comment._id, comment.author)} className="px-4 py-2 justify-center  bg-blue-500 text-white rounded-lg hover:bg-slate-200 hover:text-black transition-all duration-200 inline-flex items-center">
                    <i className="fa-regular fa-trash-can text-sm"></i>
                </button>
            </div>
            <p className="mt-2">{comment.body}</p>
        </div>
    ))
    function deleteCommentHandler(commentId: string | undefined, commentAuthor: string){
        Swal.fire({
            title: 'Hmmm...',
            text: `Are you sure you want to delete comment from: ${commentAuthor}`,
            icon: 'warning',
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonText: 'Delete',
            confirmButtonColor: '#e23237'
        }).then(data => {
            if(data.isConfirmed){
                const filteredComments = comments?.filter(comment => comment._id !== commentId)
                axios.put(`/api/products/edit/${product._id}`, {...product, comments: filteredComments})
                    .then(() => window.location.reload())
            }
        })
    }
    return (
        <div className="h-[250px] flex flex-col gap-6 overflow-y-auto">
            { rederedComments?.length === 0
            ? "Comments are loading..." 
            : rederedComments
            }
        </div>
    );
}
 
export default SingleProductCommentsList;