"use client"
import { useEffect, useState } from "react";


const CheckBox = ({label}: {label?: string}) => {
    const [active, setActive] = useState<boolean>(false)
    useEffect(() => {
    }, [active])
    return (
        <label className="flex items-center gap-4 cursor-pointer">
            <input type="checkbox" className="hidden" checked={active} onChange={e => setActive(e.target.checked)}/>
            <div 
                style={{backgroundColor: active ? "#eff6ff" : "white", color: active ? "#3b82f6" : "white"}}
                className={`  border-[3px] border-blue-100 rounded-lg flex items-center 
                justify-center
                ml-2
                sm:w-[25px] sm:h-[25px] sm:ml-0
                `}>
                <i className="fa-solid fa-check"></i>
            </div>
            <span>{label}</span>
        </label>
    );
}
 
export default CheckBox;