import { ITabsStat } from "@/components/Data";
import { CategoryScale, Chart as ChartJS, LinearScale, PointElement, LineElement, Filler, ChartData, Point, Tooltip, BarElement, plugins, TooltipItem } from "chart.js";
import { useEffect, useState } from "react";
import { Chart } from "react-chartjs-2";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, BarElement);


const TabMixedGraph = ({ data, titles }: { data: Array<ITabsStat>, titles: string[]}) => {
    const [graphOption, setOptions] = useState<ChartData<"line" | "bar", (number | Point | null)[], unknown>>()
    useEffect(() => {
        setOptions({
            labels: data.map(stat => stat.date),
            datasets:[{
                label: titles[0],
                type: 'line',
                data: data.map(stat => (stat.value - stat.value * 0.4)),
                backgroundColor: "#f5803e",
                borderColor: "#f5803e"
            },
            {
                label: titles[1],
                type: 'bar',
                data: data.map(stat => stat.value),
                borderRadius: 4,
                backgroundColor: 'rgba(98,173,234, 0.2)',
                hoverBackgroundColor: 'rgba(98,173,234, 0.8)',
                borderColor: 'rgba(98,173,234, 0.8)',
                borderWidth: 1
            }]
        })
    }, [data])

    function customTooltip(tooltipItems: TooltipItem<"bar" | "line">[]){
        let sum = 0;

        tooltipItems.forEach(function(tooltipItem) {
          sum += tooltipItem.parsed.y;
        });
        return 'Sum: ' + sum;
    }

    if(graphOption){
        return (
            <div className="flex-grow">
                <Chart type="line" data={graphOption} options={{scales: {x:{ grid: {display: false}}, y: { display: false}}, plugins: {legend: {display: false}, tooltip: {callbacks:{footer: e => customTooltip(e)}, mode: 'index'}}}}/>
            </div>
        );
    }
}
 
export default TabMixedGraph;