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
        <div className="flex  
        flex-wrap justify-center items-stretch gap-2 mt-[-50px]
        2xl:flex-nowrap 2xl:justify-between 2xl:gap-0 2xl:mt-[-100px]
        ">
            <GreyContainer className="lg:px-4 lg:py-6 xl:px-4 xl:py-10 px-2 py-2 hover:scale-[1.05] transition-all duration-200 sm:w-auto w-[300px]">
                <SingleSmallGraph data={monthContacts.newContacts} icon="fa-solid fa-phone" month={monthContacts.month} prevMonthData={monthContacts.prevMonthSum} title="New Contacts" color="59,130,246"/>
            </GreyContainer>
            <GreyContainer className="lg:px-4 lg:py-6 xl:px-4 xl:py-10 px-2 py-2 hover:scale-[1.05] transition-all duration-200 sm:w-auto w-[300px]">
                <SingleSmallGraph data={monthUsers.newUsers} icon="fa-solid fa-user" month={monthUsers.month} prevMonthData={monthUsers.prevMonthSum} title="New Users" color="220,193,100"/>
            </GreyContainer>
            <GreyContainer className="lg:px-4 lg:py-6 xl:px-4 xl:py-10 px-2 py-2 hover:scale-[1.05] transition-all duration-200 sm:w-auto w-[300px]">
                <SingleSmallGraph data={monthLeads.newLeads} icon="fa-solid fa-chart-simple" month={monthLeads.month} prevMonthData={monthLeads.prevMonthSum} title="New Leads" color="125,230,105"/>
            </GreyContainer>
        </div>
    );
}
 
export default TopSmallGraphs;