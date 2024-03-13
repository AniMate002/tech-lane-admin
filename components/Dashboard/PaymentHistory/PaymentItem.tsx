import { IPaymentItem } from "@/components/Data";
import { Nunito, Cabin, Inter } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
const cabin = Cabin({ subsets: ["latin"] });

interface PaymentItemProps extends IPaymentItem{}

const PaymentItem:React.FC<PaymentItemProps> = ({ bank, amount, currency, date, id, time, title}) => {
    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
                <p className="w-[70px] h-[70px] flex items-center justify-center rounded-full bg-blue-100 text-blue-500 text-3xl">
                    <i className={`fa-brands fa-${bank}`}></i>
                </p>
                <div>
                    <h5 className="text-slate-600 font-bold">{title}</h5>
                    <p className="text-sm text-slate-400">{date}, {time}</p>
                </div>
            </div>
            <div className="text-right">
                <p className={cabin.className + ' font-bold text-slate-600'}>+{amount}</p>
                <p className="text-sm text-slate-400">{currency}</p>
            </div>
        </div>
    );
}
 
export default PaymentItem;