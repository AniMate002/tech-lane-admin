'use client'

import { useRouter } from "next/navigation";

const EdirRedirect = () => {
    const router = useRouter()
    router.replace('/products')
}
 
export default EdirRedirect;