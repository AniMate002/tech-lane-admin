'use client'

import ContainerHeader from "@/components/Containers/ContainerHeader";
import InnerContainer from "@/components/Containers/InnerContainer";
import { ChartData } from "chart.js";
import { Radar } from 'react-chartjs-2'
import { allVisitorsByBrowser } from "../Data";
import { RadialLinearScale, Chart} from 'chart.js'

Chart.register(RadialLinearScale)

const VisitorsByBrowser = () => {
    const data: ChartData<"radar", (number | null)[], unknown> = {
        labels: allVisitorsByBrowser.map(browser => browser.browser),
        datasets: [{
            label: 'Visitors by Browser',
            data: allVisitorsByBrowser.map(browser => browser.visitors),
            backgroundColor: 'rgba(92, 141, 239, 0.2)',
            borderColor: '#5c8def',
            pointBackgroundColor: '#5c8def',
            pointHoverRadius: 10,
            pointHoverBackgroundColor: 'white',
            pointRadius: 5,
            pointHitRadius: 50,
            
        }]
    }
    return (
        <InnerContainer className="
        w-full
        lg:w-[40%]
        ">
            <ContainerHeader title="Visitors by Browser"/>
            <Radar data={data}/> 
        </InnerContainer>
    );
}
 
export default VisitorsByBrowser;