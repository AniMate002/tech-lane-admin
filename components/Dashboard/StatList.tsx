'use client'
import { statsData } from "../Data";
import StatContainer from "./StatContainer";

export interface IStat {
    title: string,
    subtitle: string,
    body: string,
    color: string,
    percentage: number
}


const StatList = () => {
    const renderedStatContainers = statsData.map((stat, i) => {
        return <StatContainer key={i} {...stat}/>
    })
    return (
        <div className="grid grid-cols-2 gap-6">
            { renderedStatContainers }
        </div>
    );
}
 
export default StatList;