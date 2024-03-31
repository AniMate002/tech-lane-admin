"use client"
import FallingMenu from "@/components/Reusable/FallingMenu";
import { useEffect, useRef, useState } from "react";



const OrdersButton = ({icon, label, children, className}: {icon: string, label: string, children: React.ReactNode, className?: string}) => {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const btnRef = useRef<HTMLButtonElement>(null);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // alert("click")
            if (btnRef.current && !btnRef.current.contains(event.target as Node)) {
                setShowMenu(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);
    return (
        <button ref={btnRef} className={"relative flex items-center gap-4 " + className} onClick={() => setShowMenu(prev => !prev)}>
            <i className={icon}></i>
            <p>{ label }</p>
            <FallingMenu show={showMenu}>
                { children }
            </FallingMenu>
        </button>
    );
}
 
export default OrdersButton;