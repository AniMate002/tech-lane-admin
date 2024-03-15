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
        <div className="grid gap-6
        grid-cols-1
        md:grid-cols-2
        ">
            { renderedStatContainers }
        </div>
    );
}
 
export default StatList;