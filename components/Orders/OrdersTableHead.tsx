import CheckBox from "../Reusable/CheckBox";



const OrdersTableHead = () => {
    return (
        <div className="flex items-center justify-between text-slate-500 font-semibold hover:shadow-sm py-4 xl:px-10 bg-blue-50">
            <span className="opacity-0">
                <CheckBox />
            </span>
            <span className="w-[10%]">Order ID</span>
            <span className="w-[17%]">Date</span>
            <span className="w-[9%]">Customer</span>
            <span className="w-[20%]">Product</span>
            <span className="w-[10%]">Price</span>
            <span className="w-[100px]">Status</span>
            <span className="opacity-0">...</span>
        </div>
    );
}
 
export default OrdersTableHead;