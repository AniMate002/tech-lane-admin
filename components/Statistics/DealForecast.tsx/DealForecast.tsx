import GreyContainer from "@/components/Containers/GreyContainer";
import DealProgressBar from "./DealProgressBar";
import DealLegend from "./DealLegend";

export interface IDealItem {
    title: string,
    color: string, 
    value: number, 
    percentage: number
}

const DealForecast = () => {
    const miniBars: Array<IDealItem> = [
        {title: "Closed won", color: "#3184f1", percentage: 47.8, value: 43.2},
        {title: "Contact sent", color: "#0f2b50", percentage: 20.2, value: 18.3},
        {title: "Pending", color: "#7de669", percentage: 18.0, value: 16.3},
        {title: "Qualified", color: "#27bcfd", percentage: 14.0, value: 12.7},

    ] 
    return (
        <GreyContainer className="px-4 py-6 flex-grow">
            <h3 className="text-slate-500">Deal Forecast</h3>
            <div className="h-[1px] bg-slate-200 mt-4"/>
            <h3 className="text-3xl text-slate-500 font-bold mt-4">$90 438</h3>
            <DealProgressBar data={miniBars}/>
            <DealLegend data={miniBars}/>
        </GreyContainer>
    );
}
 
export default DealForecast;