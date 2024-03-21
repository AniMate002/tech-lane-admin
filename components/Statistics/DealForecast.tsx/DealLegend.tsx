import { IDealItem } from "./DealForecast";


const DealLegend = ({ data } : {data: Array<IDealItem>}) => {
    const renderedLegendItems = data.map(stat => (
        <div key={stat.title} className="flex gap-2 items-center">
            <div style={{backgroundColor: stat.color}} className="w-[10px] h-[10px] rounded-full"/>
            <div className="text-sm text-slate-500 font-semibold">
                {stat.title}(${stat.percentage}%)
            </div>
        </div>
    ))
    return (
        <div className="flex items-center sm:gap-6 mt-4 flex-wrap gap-2">
            { renderedLegendItems }
        </div>
    );
}
 
export default DealLegend;