import { IMostLeads } from "@/components/Data";



const MostLeadsInfo = ({ data }: { data: Array<IMostLeads>}) => {
    const renderedItems = data.map(stat => (
        <div key={stat._id} className="flex items-center relative justify-between py-4 
        after:content-[''] after:absolute after:bottom-0 after:w-[90%] after:h-[1px] after:bg-slate-300 after:left-[50%] after:translate-x-[-50%] last-of-type:after:w-0">
            <div className="flex items-center gap-2">
                <i style={{color: stat.color}} className={stat.icon + " text-lg block w-[25px]"}></i>
                <span className="font-semibold text-slate-500 text-sm">{stat.title}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-400">
                <span>{stat.value}</span>
                <span>vs</span>
                <span>{stat.value - Math.round(stat.value * 0.2)}</span>
            </div>
            <div className="text-slate-500 text-sm font-bold">
                {stat.value.toString().slice(0, 2)}%
            </div>
        </div>
    ))
    return (
        <div className="bg-blue-100 px-4 py-2 rounded-xl mt-2">
            { renderedItems }
        </div>
    );
}
 
export default MostLeadsInfo;