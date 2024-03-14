'use client'
import { ChartData } from "chart.js";
import ContainerHeader from "../Containers/ContainerHeader";
import InnerContainer from "../Containers/InnerContainer";
import { Doughnut } from 'react-chartjs-2'
import { allRecentActivities } from "../Data";
import { ArcElement, Chart, Legend, Tooltip} from 'chart.js'

Chart.register(ArcElement, Legend, Tooltip);


const RecentActivity = () => {
    const data: ChartData<"doughnut", number[], unknown> = {
        labels: allRecentActivities.map(activity => activity.country),
        datasets:[{
            label: 'Recent Activities',
            data: allRecentActivities.map(activity => activity.percentage),
            backgroundColor: allRecentActivities.map(activity => activity.color)
        }]
    }
    return (
        <InnerContainer className="flex-grow">
            <ContainerHeader title="Recent Activity"/>
            <Doughnut data={data} options={{plugins:{tooltip:{enabled: true}, legend: {display: true, position: 'top'}}}}/>
        </InnerContainer>
    );
}
 
export default RecentActivity;