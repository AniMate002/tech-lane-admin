import OrdersPage from "@/components/Orders/OrdersPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Orders - Tech Lane Admin",
    description: "Orders page of Tech Lane Admin",
  };

const Orders = () => {
    return (
        <OrdersPage />
    );
}
 
export default Orders;