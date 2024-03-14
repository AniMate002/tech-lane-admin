'use client'

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const EditRedirect = () => {
    const router = useRouter()
    useEffect(() => {
        router.replace('/categories')
    }, [router])
}
 
export default EditRedirect;