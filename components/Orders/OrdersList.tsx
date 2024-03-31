import { IOrder } from "@/models/Orders";
import InnerContainer from "../Containers/InnerContainer";
import OrdersItem from "./OrdersItem";




const OrdersList = ({ orders }: { orders: Array<IOrder>}) => {
    const renderedOrders = orders.map(order => <OrdersItem order={order} key={order._id}/>)
    return (
        <InnerContainer className="mt-6 flex flex-col gap-6">
            { renderedOrders }
        </InnerContainer>
    );
}
 
export default OrdersList;