import { Dispatch, SetStateAction } from "react";


const DealVSGoalLegend = ({ toggleClosedAmount, toggleRevenueGoal }: { 
    toggleClosedAmount: () => void,
    toggleRevenueGoal: () => void
}) => {

    return (
        <div className="flex items-center gap-4 text-sm text-slate-500 font-semibold mt-6 ml-8">
            <button onClick={() => toggleRevenueGoal()} className="flex items-center gap-2">
                <div className="rounded-full w-[10px] h-[10px] bg-orange-500"/>
                <span>Revenue Goal</span>
            </button>
            <button onClick={() => toggleClosedAmount()} className="flex items-center gap-2">
                <div className="rounded-full w-[10px] h-[10px] bg-blue-500"/>
                <span>Closed Amount</span>
            </button>
        </div>
    );
}
 
export default DealVSGoalLegend;