'use client'

import { useRouter } from "next/navigation";

const EdirRedirect = () => {
    const router = useRouter()
    router.push('/products')
}
 
export default EdirRedirect;