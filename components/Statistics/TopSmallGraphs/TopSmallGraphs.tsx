'use client'

import OuterContainer from "@/components/Containers/OuterContainer";
import Loading from "@/components/Reusable/Loading";
import { IMonthContacts } from "@/models/MonthContacts";
import axios from "axios";
import { useEffect, useState } from "react";
import SingleSmallGraph from "./SingleSmallGraph";
import { IMonthUsers } from "@/models/MonthUsers";
import { IMonthLeads } from "@/models/MonthLeads";



const TopSmallGraphs = () => {
    const [monthContacts, setMonthContacts] = useState<IMonthContacts>()
    const [monthUsers, setMonthUsers] = useState<IMonthUsers>()
    const [monthLeads, setLeads] = useState<IMonthLeads>()

    useEffect(() => {
        axios.get('/api/statistics/contacts')
            .then(res => {
                const currMonth = res.data[res.data.length - 1]
                setMonthContacts(currMonth)
            })
        
        axios.get('/api/statistics/users')
            .then(res => {
                const currMonth = res.data[res.data.length - 1]
                setMonthUsers(currMonth)
            })

        axios.get('/api/statistics/leads')
            .then(res => {
                const currMonth = res.data[res.data.length - 1]
                setLeads(currMonth)
            })
    }, [])
    if(!monthContacts || !monthUsers || !monthLeads){
        return <Loading />
    }
    // function addDataHandler(){
    //     const newData:IMonthLeads = {month:"Jun", newLeads: [200, 150, 175, 130, 150, 115, 230], prevMonthSum: 1427}
    //     axios.post('/api/statistics/leads', newData).then(() => alert("success"))
    // }
    return (
        <div className="flex items-center justify-center">
            <OuterContainer noMx>
                <SingleSmallGraph data={monthContacts.newContacts} icon="fa-solid fa-phone" month={monthContacts.month} prevMonthData={monthContacts.prevMonthSum} title="New Contacts" color="59,130,246"/>
            </OuterContainer>
            <OuterContainer noMx>
                <SingleSmallGraph data={monthUsers.newUsers} icon="fa-solid fa-user" month={monthUsers.month} prevMonthData={monthUsers.prevMonthSum} title="New Users" color="220,193,100"/>
            </OuterContainer>
            <OuterContainer noMx>
                <SingleSmallGraph data={monthLeads.newLeads} icon="fa-solid fa-user" month={monthLeads.month} prevMonthData={monthLeads.prevMonthSum} title="New Leads" color="125,230,105"/>
            </OuterContainer>
        </div>
    );
}
 
export default TopSmallGraphs;