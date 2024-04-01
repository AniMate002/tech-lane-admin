import { IOrder } from "@/models/Orders";
import InnerContainer from "../Containers/InnerContainer";
import OrdersItem from "./OrdersItem";
import OrdersTableHead from "./OrdersTableHead";




const OrdersList = ({ orders }: { orders: Array<IOrder>}) => {
    const renderedOrders = orders.map(order => <OrdersItem order={order} key={order._id}/>)
    return (
        <InnerContainer className="mt-6 flex flex-col px-0 ">
            <OrdersTableHead />
            { renderedOrders }
        </InnerContainer>
    );
}
 
export default OrdersList;