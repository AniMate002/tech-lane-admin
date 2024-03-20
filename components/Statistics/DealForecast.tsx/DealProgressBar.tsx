import { IDealItem } from "./DealForecast";





const DealProgressBar = ({ data }: { data: Array<IDealItem>}) => {
    
    const renderedMiniBars = data.map((bar, index) => (
        <div key={bar.title} style={{width: bar.percentage + "%"}}>
            <p className="text-sm font-bold text-blue-500">${bar.value}k</p>
            <div style={{backgroundColor: bar.color}} className={`opacity-[0.8] hover:opacity-[1] transition-all duration-200 hover:translate-y-[-2px] w-[100%] mt-2 h-[15px] ${index === 0 ? 'rounded-l-xl' : index === data.length - 1 ? 'rounded-r-xl' : ''}`}/>
        </div>
    ))
    return (
        <div className="flex w-full gap-[2px] items-center mt-6">
            { renderedMiniBars }
        </div>
    );
}
 
export default DealProgressBar;