"use client"
import GreyContainer from "@/components/Containers/GreyContainer";
import Tabs from "./Tabs";
import { useEffect, useState } from "react";
import { ITabsStat, TabsDeals, TabsProfit, TabsRevenue, TabsUsers } from "@/components/Data";
import TabInfo from "./TabInfo";
import TabMixedGraph from "./TabMixedGraph";



const TabGraph = () => {
    const [activeTab, setActiveTab] = useState<"Revenue" | "Users" | "Deals" | "Profit">("Revenue")
    const [data, setData] = useState<Array<ITabsStat>>([])
    const [titles, setTitles] = useState<Array<string>>(["Revenue Goal", "Revenue"])
    const [sum, setSum] = useState<number>(0)
    useEffect(() => {
        if(activeTab === "Revenue"){
            setData(TabsRevenue)
            setTitles(["Revenue Goal", "Revenue"])
        }
        if(activeTab === "Users"){
            setData(TabsUsers)
            setTitles(["Users Goal", "Users"])
        }
        if(activeTab === "Deals"){
            setData(TabsDeals)
            setTitles(["Deals Goal", "Deals"])
        }
        if(activeTab === "Profit"){
            setData(TabsProfit)
            setTitles(["Profit Goal", "Profit"])
        }
    }, [activeTab])
    useEffect(() => {
        const newSum: number = data.reduce(
            (accumulator, stat) => accumulator + stat.value,
            0
        )
        setSum(newSum)
    }, [data])
    return (
        <GreyContainer className="py-8 px-6 flex-shrink-0">
            <Tabs activeTab={activeTab} setActiveTab={setActiveTab}/>
            <div className="flex mt-8">
                <TabInfo sum={sum}/>
                <TabMixedGraph data={data} titles={titles}/>
            </div>
        </GreyContainer>
    );
}
 
export default TabGraph;