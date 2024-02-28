'use client'

import { useRouter } from "next/navigation";

const EditRedirect = () => {
    const route = useRouter()
    route.replace('/categories')
}
 
export default EditRedirect;