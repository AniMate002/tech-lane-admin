'use client'

import OuterContainer from "@/components/Containers/OuterContainer";
import Loading from "@/components/Reusable/Loading";
import { IMonthContacts } from "@/models/MonthContacts";
import axios from "axios";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import SingleSmallGraph from "./SingleSmallGraph";
import { IMonthUsers } from "@/models/MonthUsers";
import { IMonthLeads } from "@/models/MonthLeads";
import GreyContainer from "@/components/Containers/GreyContainer";

interface TopSmallGraphsProps{
    monthContacts: IMonthContacts,
    monthUsers: IMonthUsers,
    monthLeads: IMonthLeads
}



const TopSmallGraphs:React.FC<TopSmallGraphsProps> = ({ monthContacts, monthLeads, monthUsers}) => {
    return (
        <div className="flex items-center justify-between mt-[-100px]">
            <GreyContainer className="px-4 py-10 hover:scale-[1.05] transition-all duration-200">
                <SingleSmallGraph data={monthContacts.newContacts} icon="fa-solid fa-phone" month={monthContacts.month} prevMonthData={monthContacts.prevMonthSum} title="New Contacts" color="59,130,246"/>
            </GreyContainer>
            <GreyContainer className="px-4 py-10 hover:scale-[1.05] transition-all duration-200">
                <SingleSmallGraph data={monthUsers.newUsers} icon="fa-solid fa-user" month={monthUsers.month} prevMonthData={monthUsers.prevMonthSum} title="New Users" color="220,193,100"/>
            </GreyContainer>
            <GreyContainer className="px-4 py-10 hover:scale-[1.05] transition-all duration-200">
                <SingleSmallGraph data={monthLeads.newLeads} icon="fa-solid fa-user" month={monthLeads.month} prevMonthData={monthLeads.prevMonthSum} title="New Leads" color="125,230,105"/>
            </GreyContainer>
        </div>
    );
}
 
export default TopSmallGraphs;