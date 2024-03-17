import { IMostLeads } from "@/components/Data";
import { ChartData } from "chart.js";
import { Doughnut } from 'react-chartjs-2'
import { ArcElement, Chart, Legend, Tooltip} from 'chart.js'

Chart.register(ArcElement, Legend, Tooltip);


const MostLeadsGraph = ({ data }: { data: Array<IMostLeads>}) => {
    const graphOptions: ChartData<"doughnut", number[], unknown> = {
        labels: data.map(stat => stat.title),
        datasets:[{
            label: 'Recent Activities',
            data: data.map(stat => stat.value),
            backgroundColor: data.map(stat => stat.color)
        }]
    }
    return (
        <div className="mt-4 h-[250px] flex justify-center relative">
            <Doughnut data={graphOptions} options={{plugins: { legend: {display: false}}}}/>
            <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-30 text-center">
                <p className="uppercase text-slate-400 text-sm">total</p>
                <p className="font-bold text-4xl text-slate-500">13.6k</p>
            </div>
        </div>
    );
}
 
export default MostLeadsGraph;