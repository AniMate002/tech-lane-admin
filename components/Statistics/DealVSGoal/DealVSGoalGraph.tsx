"use client"
import { Line} from 'react-chartjs-2'
import { CategoryScale, Chart, LinearScale, PointElement, LineElement, ChartData, Point, } from "chart.js";
import { useEffect, useState } from "react";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement);

const DealVSGoalGraph = ({ labels, closedAmount, revenueGoal}: { labels: Array<string>, closedAmount: Array<number>, revenueGoal: Array<number>}) => {
    const [grapthOption, setGrapthOption] = useState<ChartData<"line", (number | Point | null)[], unknown>>()
    useEffect(() => {
        setGrapthOption({
                labels: labels.map(date => date),
                datasets: [{
                    label: "Closed Amount",
                    data: closedAmount.map(stat => stat),
                    backgroundColor: '#5c8def',
                    borderColor: '#5c8def',
                    pointBackgroundColor: '#5c8def',
                    borderJoinStyle: 'miter',
                    pointHoverRadius: 10,
                    pointHoverBackgroundColor: 'white',
                    pointRadius: 5,
                    pointHitRadius: 50,
                },
                {
                    type: 'line',
                    label: "Revenue Goal",
                    data: revenueGoal.map(stat => stat),
                    backgroundColor: '#f5803e',
                    borderColor: '#f5803e',
                    pointBackgroundColor: '#f5803e',
                    borderJoinStyle: 'miter',
                    pointHoverRadius: 10,
                    pointHoverBackgroundColor: 'white',
                    pointRadius: 5,
                    pointHitRadius: 50,
                },
            
            ]
    })

    }, [closedAmount, revenueGoal])

    if(grapthOption){
        return (
            <div className='sm:ml-8 ml-5 mt-4'>
                <Line data={grapthOption} options={{plugins:{tooltip:{ mode: 'index'}, legend: { display: false}}, scales: {x: { grid: { display: false}}}}} />
            </div>
        );
    }
}
 
export default DealVSGoalGraph;