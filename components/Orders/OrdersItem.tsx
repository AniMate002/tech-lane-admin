import { IOrder } from "@/models/Orders";
import CheckBox from "../Reusable/CheckBox";
import FallingMenu from "../Reusable/FallingMenu";
import { useEffect, useRef, useState } from "react";

const OrdersItem = ({ order }: { order: IOrder }) => {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const menuRef = useRef<HTMLButtonElement>(null);
    function getColor(status: "success" | "pending" | "cancelled"):string {
        if(status === "success")
            return "125,230,105"
        else if (status === "pending")
            return "223,200,109"
        else if(status === "cancelled")
            return "220,38,38"
        else
            return "39,188,253"
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setShowMenu(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="flex items-center justify-between text-slate-500 font-semibold">
            <CheckBox />
            <span className="w-[10%] text-ellipsis overflow-hidden">{order._id}</span>
            <span className="w-[20%]">{order.date}</span>
            <span className="w-[10%]">{order.customer}</span>
            <span className="w-[20%]">{order.product}</span>
            <span className="w-[10%]">{order.price}</span>
            <span style={{color: `rgb(${getColor(order.status)})`, backgroundColor: `rgba(${getColor(order.status)}, 0.1)`}} className="w-[100px] text-center uppercase text-[12px] px-4 py-2 font-bold rounded-full">{order.status}</span>
            <button className="relative" ref={menuRef}>
                <i onClick={() => setShowMenu(prev => !prev)} className="fa-solid fa-ellipsis py-2 px-4 rounded-lg hover:bg-slate-100"></i>
                <FallingMenu show={showMenu}>
                    <div className="flex items-center gap-2 hover:bg-blue-50 px-4 py-2 rounded-xl">
                        <i className="fa-solid fa-check-double text-green-500"></i>
                        <span>Accept Order</span>
                    </div>
                    <div className="flex items-center gap-2 hover:bg-blue-50 px-4 py-2 rounded-xl">
                        <i className="fa-solid fa-xmark text-red-500"></i>
                        <span>Reject Order</span>
                    </div>
                    <div className="flex items-center gap-2 hover:bg-blue-50 px-4 py-2 rounded-xl">
                        <i className="fa-solid fa-rotate-right text-yellow-500"></i>
                        <span>Confirmed</span>
                    </div>
                </FallingMenu>
            </button>
        </div>
    );
}

export default OrdersItem;
