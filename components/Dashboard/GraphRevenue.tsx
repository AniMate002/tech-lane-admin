'use client'

import { Line} from 'react-chartjs-2'
import InnerContainer from '../Containers/InnerContainer';
import { revenueData } from '../Data';
import { ChartData, Point } from 'chart.js';
import { useEffect, useState } from 'react';
import { CategoryScale, Chart, LinearScale, PointElement, LineElement, Filler } from "chart.js";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Filler);

const GraphRevenue = () => {
    const [data, setData] = useState<ChartData<"line", (number | Point | null)[], unknown>>()
    useEffect(() => {
        setData({
            labels: revenueData.map(obj => obj.date),
            datasets: [{
                label: "Revenue",
                data: revenueData.map(obj => obj.revenue),
                fill: true,
                tension: 0.3,
                backgroundColor: 'rgba(92, 141, 239, 0.2)',
                borderColor: '#5c8def',
                pointBackgroundColor: '#5c8def',
                borderJoinStyle: 'miter',
                pointHoverRadius: 20,
                pointHoverBackgroundColor: 'white',
                pointRadius: 5,
                pointHitRadius: 100,
                
            }]
        })
    }, [])
    return (
        <InnerContainer>
            <h4 className='text-2xl text-slate-500'>Revenue</h4>
            <hr className='my-4'/>
            {
                data 
                ? <Line data={data}/> 
                : 'Loading'
            }
            
        </InnerContainer>
    );
}
 
export default GraphRevenue;