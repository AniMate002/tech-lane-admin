import OptionFallingMenu from "@/components/Reusable/OptionFallingMenu";
import OrdersButton from "./OrdersButton";
import VanillaCalendar from "@/components/VanillaCalendar/VanillaCalendar";



const OrdersSort = () => {
    const orderTypes:Array<{icon: string, title: string}> = [
        {icon: "fa-solid fa-utensils", title: "Dine in"},
        {icon: "fa-solid fa-car-side", title: "Pick up"},
        {icon: "fa-solid fa-people-carry-box", title: "Delivery"},
        {icon: "fa-solid fa-circle-dot", title: "Iactive"}
    ] 
    const orderPayments:Array<{icon: string, title: string}> = [
        {icon: "fa-solid fa-credit-card", title: "By card"},
        {icon: "fa-solid fa-money-bill-wave", title: "In cash"},
        {icon: "fa-solid fa-arrows-down-to-line", title: "On arrival"},
        {icon: "fa-solid fa-circle-dot", title: "Not payed"}
    ]
    const renderedOrderTypes = orderTypes.map(type => (
        <OptionFallingMenu icon={type.icon} title={type.title} key={type.title}/>
    ))
    const renderedOrderPayments = orderPayments.map(payment => (
        <OptionFallingMenu icon={payment.icon} title={payment.title} key={payment.title}/>
    ))
    return (
        <div className="flex items-center px-6 py-3 text-blue-500
        flex-col bg-blue-50 w-full rounded-lg gap-2
        sm:flex-row sm:gap-12 sm:rounded-full sm:w-fit
        ">
            <OrdersButton label="Date" icon="fa-solid fa-calendar-days">
                <VanillaCalendar />
            </OrdersButton>
            <OrdersButton label="Order type" icon="fa-solid fa-plane-departure">
                { renderedOrderTypes }
            </OrdersButton>
            <OrdersButton label="Payment type" icon="fa-solid fa-cash-register">
                { renderedOrderPayments }
            </OrdersButton>
        </div>
    );
}
 
export default OrdersSort;