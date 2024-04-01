


const OrdersSearchInput = () => {
    return (
        <div className="flex items-center 
        flex-col gap-2
        md:flex-row md:gap-6
        ">
                <label className="border-[1px] py-2 px-6 rounded-full flex items-center gap-2 w-fit">
                    <input type="text" placeholder="Search here" className=""/>
                    <button className="fa-solid fa-magnifying-glass text-blue-500 text-lg hover:text-blue-400 transition-all duration-200"></button>
                </label>
                <button className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-all duration-200 hover:bg-blue-50 p-4 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    <span>Export</span>
                </button>
            </div>
    );
}
 
export default OrdersSearchInput;