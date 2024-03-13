import { useEffect, useState } from "react";
import ContainerHeader from "../Containers/ContainerHeader";
import InnerContainer from "../Containers/InnerContainer";
import { Line, Bar } from 'react-chartjs-2'
import { ChartData, CategoryScale, Chart, LinearScale, Tooltip, PointElement, LineElement, Filler, BarElement } from "chart.js";
import { AllMonths } from "../Data";

interface ISale {
    id: number,
    month: string,
    value: number
}



Chart.register(CategoryScale, LinearScale, Tooltip, PointElement, LineElement, Filler, BarElement)


const SingleProductGraph = ({ title }: {title: string}) => {
    const [sales, setSales] = useState<Array<ISale>>()
    const [data, setData] = useState<ChartData<"line", (number | [number, number] | null)[], unknown>>()
    useEffect(() => {
        const newSales: Array<ISale> = AllMonths.map((month: string, index: number) => ({ id: index, month: month, value: Math.round(Math.random() * 1000)}))
        setSales(newSales)
    }, [title])

    useEffect(() => {
        setData({
            labels: sales?.map(sale => sale.month),
            datasets: [{
                label: 'Sales of ' + title,
                data: sales?.map(sale => sale.value) || [],
                fill: true,
                backgroundColor: 'rgba(92, 141, 239, 0.2)',
                borderColor: '#5c8def',
                pointBackgroundColor: '#5c8def',
                borderJoinStyle: 'miter',
                pointHoverRadius: 10,
                pointHoverBackgroundColor: 'white',
                pointRadius: 5,
                pointHitRadius: 150,
            }]
        })
    }, [sales, title])
    return (
        <InnerContainer className="w-[50%]">
            <ContainerHeader title={"Sales of " + title} />

            {data 
            ? 
            <div>
                <Line data={data}/>
                <Bar data={{...data, backgroundColor: 'black'} as any}/>
            </div>
            : 'Loading data' 
            }
        </InnerContainer>
    );
}
 
export default SingleProductGraph;