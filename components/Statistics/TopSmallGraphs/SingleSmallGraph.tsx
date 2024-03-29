import { useEffect, useState } from "react";
import { CategoryScale, Chart, LinearScale, PointElement, LineElement, Filler, ChartData, Point, Tooltip } from "chart.js";
import { Line } from "react-chartjs-2";
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip);



interface SingleSmallGraphProps {
    icon: string,
    title: string,
    prevMonthData: number,
    month: string,
    data: Array<number>,
    color: string
}


const SingleSmallGraph:React.FC<SingleSmallGraphProps> = ({ icon, title, prevMonthData, month, data, color }) => {
    const [percentage, setPercentage] = useState<number>(0)
    const [currSum, setCurrSum] = useState<number>()
    const [graphOptions, setGraphOptions] = useState<ChartData<"line", (number | Point | null)[], unknown>>({
        labels: data.map((_, index) => month + " " + (index < 10 ? "0" + index : index)),
        datasets: [{
            label: "Contacts",
            data: data.map(contacts => contacts),
            fill: true,
            tension: 0.3,
            backgroundColor: `rgba(${color}, 0.2)`,
            borderColor: `rgb(${color})`,
            pointBackgroundColor: `rgb(${color})`,
            borderJoinStyle: 'miter',
            // pointHoverRadius: 20,
            pointHoverBackgroundColor: 'white',
            pointRadius: 1,
            pointHitRadius: 100,
            
        }]
    })
    useEffect(() => {
        if(currSum)
            setPercentage(100 - Math.round(prevMonthData / currSum * 100))
            // setPercentage(100 - Math.round(currSum / prevMonthData * 100))
    }, [prevMonthData, currSum])
    useEffect(() => {
        const sum = data.reduce(
            (accummulator, value) => accummulator + value,
            0
        )
        setCurrSum(sum)
    }, [data])
    return (
        <div className="flex gap-2 items-end">
            <div>
                <div className="flex gap-2 items-center">
                    <span style={{color: `rgb(${color})`, backgroundColor: `rgba(${color}, 0.3)`}} className={`flex items-center justify-center xl:w-[40px] xl:h-[40px] xl:text-base text-[12px] w-[25px] h-[25px] rounded-full`}><i className={icon}></i></span>
                    <p className="font-bold text-slate-500">{title}</p>
                </div>
                <div className="flex mt-4 gap-2 items-center">
                    <span className="xl:text-5xl text-2xl text-slate-500">{Math.abs(percentage)}%</span>
                    <div>
                        <span className="text-xl">
                            {
                                percentage > 0
                                ? <i className="fa-solid fa-caret-up text-green-700"></i>
                                : <i className="fa-solid fa-caret-down text-red-600"></i>
                            }
                        </span>
                        <p className="text-slate-500 text-[12px] font-bold mt-[-10px] xl:mt-[-5px]">{prevMonthData} vs {currSum}</p>
                    </div>
                </div>
            </div>
            <div className="xl:h-[100px] h-[40px]">
                <Line data={graphOptions} options={{scales: { x: {display: false}, y: { display: false}}, plugins: {legend: {display: false}}}}/>
            </div>
        </div>
    );
}
 
export default SingleSmallGraph;