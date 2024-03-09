'use client'

import { nunito } from "@/app/products/layout";
import InnerContainer from "../Containers/InnerContainer";
import { IStat } from "./StatList";

interface StatContainerProps extends IStat {}

const StatContainer:React.FC<StatContainerProps> = ({title, subtitle, body, color, percentage}) => {
    // alert(color)
    return (
        <InnerContainer>
            <div className="flex justify-between items-center">
                <div>
                    <p className={` text-slate-400 font-bold`}>{title}</p>
                    <p className={nunito.className + " text-4xl font-bold text-slate-600 mt-4 tracking-tighter"}>{body}</p>
                </div>
                <div style={{backgroundColor: color}} className={`py-2 px-4 rounded-lg text-white text-sm font-bold`}>{subtitle}</div>
            </div>
            <div className="h-[5px] rounded-full bg-slate-100 mt-6">
                <div style={{width: percentage + "%", backgroundColor: color}} className={`h-full bg-red-400 rounded-full after:content-[${percentage}] relative`}>
                    <p style={{color}} className="absolute right-[-10px] top-[-23px] font-bold text-sm">{percentage}%</p>
                </div>
            </div>
        </InnerContainer>
    );
}
 
export default StatContainer;