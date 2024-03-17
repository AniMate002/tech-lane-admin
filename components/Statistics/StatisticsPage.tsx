"use client"
import { useEffect, useState } from "react";
import MostLeads from "./MostLeads/MostLeads";
import TabGraph from "./TabGraph/TabGraph";
import TopSmallGraphs from "./TopSmallGraphs/TopSmallGraphs";
import OuterContainer from "../Containers/OuterContainer";
import Loading from "../Reusable/Loading";
import { IMonthContacts } from "@/models/MonthContacts";
import { IMonthUsers } from "@/models/MonthUsers";
import { IMonthLeads } from "@/models/MonthLeads";
import axios from "axios";


const StatisticsPage = () => {
    const [status, setStatus] = useState<"loading" | "error" | "success">("success")
    const [monthContacts, setMonthContacts] = useState<IMonthContacts>()
    const [monthUsers, setMonthUsers] = useState<IMonthUsers>()
    const [monthLeads, setLeads] = useState<IMonthLeads>()
    useEffect(() => {
        setStatus("loading")
        Promise.all([
            axios.get('/api/statistics/contacts').then(res => res.data[res.data.length - 1]),
            axios.get('/api/statistics/users').then(res => res.data[res.data.length - 1]),
            axios.get('/api/statistics/leads').then(res => res.data[res.data.length - 1])
        ]).then(([contacts, users, leads]) => {
            setMonthContacts(contacts);
            setMonthUsers(users);
            setLeads(leads);
            setStatus("success");
        }).catch(error => {
            console.error("Error fetching data:", error);
            setStatus("error");
        });
        

    }, [])
    if(status === "loading"){
        return <OuterContainer><Loading title="Loading Statistics"/></OuterContainer>
    }
    if(!monthContacts || !monthLeads || !monthUsers){
        return <OuterContainer><Loading title="Loading Statistics"/></OuterContainer>
    }
    return (
        <div className="px-10">
            <TopSmallGraphs monthContacts={monthContacts} monthLeads={monthLeads} monthUsers={monthUsers}/>
            <div className="flex gap-6 mt-6 items-start">
                <TabGraph />
                <MostLeads />
            </div>
        </div>
    );
}
 
export default StatisticsPage;