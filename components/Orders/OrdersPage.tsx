"use client"
import { useEffect, useState } from "react";
import GreyContainer from "../Containers/GreyContainer";
import OrdersHeader from "./OrdersHeader";
import OrdersList from "./OrdersList";
import OrdersSearchForm from "./OrdersSearchForm";
import { IOrder } from "@/models/Orders";
import axios from "axios";
import Loading from "../Reusable/Loading";
import OuterContainer from "../Containers/OuterContainer";


const OrdersPage = () => {
    const [orders, setOrders] = useState<Array<IOrder>>()
    useEffect(() => {
        axios.get("/api/orders")
            .then(res => {
                setOrders(res.data)
            })
    })
    if(!orders){
        return <OuterContainer><Loading title="Loading Orders"/></OuterContainer>

    }
    return (
        <div>
            <GreyContainer className="sm:w-[95%] w-full mx-auto px-4 py-8 mt-[-50px]">
                <OrdersHeader />
                <OrdersSearchForm />
                <OrdersList orders={orders}/>
            </GreyContainer>
        </div>
    );
}
 
export default OrdersPage;