"use client"
import GreyContainer from "@/components/Containers/GreyContainer";
import DealVSGoalGraph from "./DealVSGoalGraph";
import DealVSGoalLegend from "./DealVSGoalLegend";
import { useState } from "react";



const DealVSGoal = () => {
    const closedAmountOrigin: Array<number> = [0, 5000, 18000, 40000, 58000, 65000, 90000, 110000, 140000] 
    const revenueGoalOrigin: Array<number> = [0, 1000, 24000, 35000, 45000, 53000, 57000, 68000, 79000] 
    const [closedAmountCurrent, setClosedAmountCurrent] = useState<Array<number>>(closedAmountOrigin)
    const [revenueGoalCurrent, setRevenueGoalCurrent] = useState<Array<number>>(revenueGoalOrigin)
    const labels:Array<string> = []
    for(let i = 1; i < 18; i+=2){
        labels.push(i + " Mar, 24")
    }

    function toggleClosedAmount(){
        if(closedAmountCurrent.length !== 0){
            setClosedAmountCurrent([])
        }else{
            setClosedAmountCurrent(closedAmountOrigin)
        }
    }

    function toggleRevenueGoal(){
        if(revenueGoalCurrent.length !== 0){
            setRevenueGoalCurrent([])
        }else{
            setRevenueGoalCurrent(revenueGoalOrigin)
        }
    }

    return (
        <GreyContainer className="mt-0 px-4 py-6 xl:w-[55%] w-full relative">
            <h3 className="text-slate-500 font-semibold">Deal Closed vs Goal</h3>
            <DealVSGoalLegend toggleClosedAmount={toggleClosedAmount} toggleRevenueGoal={toggleRevenueGoal}/>
            <span className="absolute rotate-[270deg] sm:top-[50%] top-[70%] sm:left-6 left-3 origin-left  text-sm text-slate-500 font-bold">Closed Amount</span>
            <DealVSGoalGraph labels={labels} closedAmount={closedAmountCurrent} revenueGoal={revenueGoalCurrent}/>
        </GreyContainer>
    );
}
 
export default DealVSGoal;