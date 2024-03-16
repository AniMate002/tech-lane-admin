'use client'
import { IComment, IProduct } from "@/app/products/new/page";
import axios from "axios";
import { useRouter } from "next/navigation";
import { comment } from "postcss";
import { FormEvent, useState } from "react";

interface SingleProductCommentsFormProps extends IProduct {}

const SingleProductCommentsForm:React.FC<SingleProductCommentsFormProps> = (product) => {
    const [author, setAuthor] = useState<string>('')
    const [body, setBody] = useState<string>('')
    const router = useRouter()
    function sendCommentHandler(e: FormEvent<HTMLFormElement>){
        e.preventDefault()
        if(author && body){
            const newComment: IComment = {author, body, createdAt: (new Date()).toLocaleString()}
            const newComments: Array<IComment> = product.comments ? [...product.comments, newComment] : [newComment]
    
            axios.put(`/api/products/edit/${product._id}`, {...product, comments: newComments})
                .then(() => window.location.reload())
        }
    }
    return (
        <form onSubmit={e => sendCommentHandler(e)} className="mt-10">
            <label className="flex items-center [@media(min-width:420px)]:gap-4 gap-1">
                <span className="text-blue-300 inline-flex justify-center items-center py-2 [@media(min-width:420px)]:w-[100px] w-[50px] [@media(min-width:420px)]:text-base text-[12px] bg-slate-100 rounded-lg font-bold">Author:</span>
                <input value={author} onChange={e => setAuthor(e.target.value)} name="country" type="text" placeholder="Admin..." className="mt-2 border-b-2 px-4 py-2 flex-grow"/>
            </label>
            <label className="flex items-start mt-4 [@media(min-width:420px)]:gap-4 gap-1">
                <span className="text-blue-300 inline-flex justify-center items-center py-2 [@media(min-width:420px)]:w-[100px] w-[50px] [@media(min-width:420px)]:text-base text-[12px] bg-slate-100 rounded-lg font-bold">Text:</span>
                <textarea value={body} onChange={e => setBody(e.target.value)} name="country" placeholder="Text..." className="mt-2 border-b-2 px-4 py-2 flex-grow focus:outline-none"/>
            </label>
            <button type="submit" className="mt-6 w-full py-2 justify-center  bg-blue-500 text-white rounded-lg hover:bg-slate-200 hover:text-black transition-all duration-200 inline-flex items-center gap-2">
                <span>Send</span>
                <i className="fa-regular fa-paper-plane text-sm"></i>
            </button>
        </form>
    );
}
 
export default SingleProductCommentsForm;