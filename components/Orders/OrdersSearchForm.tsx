"use client"

import InnerContainer from "../Containers/InnerContainer";
import OrdersSearchInput from "./OrdersSearch/OrdersSearchInput";
import OrdersSort from "./OrdersSearch/OrdersSort";


const OrdersSearchForm = () => {
    return (
        <InnerContainer className="mt-6 flex items-center justify-between">
            <OrdersSearchInput />
            <OrdersSort />
        </InnerContainer>
    );
}
 
export default OrdersSearchForm;