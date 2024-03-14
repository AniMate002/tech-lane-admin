'use client'

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const EdirRedirect = () => {
    const router = useRouter()
    useEffect(() => {
        router.replace('/products')
    }, [router])
}
 
export default EdirRedirect;