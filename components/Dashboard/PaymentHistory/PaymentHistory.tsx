import { allPayments } from "@/components/Data";
import ContainerHeader from "../../Containers/ContainerHeader";
import InnerContainer from "../../Containers/InnerContainer";
import PaymentItem from "./PaymentItem";


const PaymentHistory = () => {
    const renderedPayments = allPayments.map(payment => {
        return <PaymentItem key={payment.id} {...payment}/>
    })
    return (
        <InnerContainer className="
        w-full
        md:w-[50%]
        ">
            <ContainerHeader title="Payment History"/>
            <div className="flex gap-4 flex-col">
                { renderedPayments }
            </div>
        </InnerContainer>  
    );
}
 
export default PaymentHistory;