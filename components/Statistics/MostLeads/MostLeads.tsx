import GreyContainer from "@/components/Containers/GreyContainer";
import MostLeadsGraph from "./MostLeadsGraph";
import { MostLeadsData } from "@/components/Data";
import MostLeadsInfo from "./MostLeadsInfo";


const MostLeads = () => {
    
    return (
        <GreyContainer className="flex-grow px-4 py-6">
            <h3 className="text-slate-500">Most Leads</h3>
            <div className="h-[1px] bg-slate-200 mt-4"/>
            <MostLeadsGraph data={MostLeadsData}/>
            <MostLeadsInfo data={MostLeadsData}/>
        </GreyContainer>
    );
}
 
export default MostLeads;