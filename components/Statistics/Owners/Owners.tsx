import GreyContainer from "@/components/Containers/GreyContainer";
import { IOwner } from "@/models/Owner";
import axios from "axios";
import OwnersList from "./OwnersList";
import OwnersHeader from "./OwnersHeader";
import OwnersTotal from "./OwnersTotal";


const Owners = ({ owners }: {owners: Array<IOwner>}) => {
    
    return (
        <GreyContainer className="flex-grow">
            <h3 className="text-slate-500 font-semibold px-4 py-6">Deal Closed vs Goal</h3>
            <OwnersHeader />
            <OwnersList owners={owners}/>
            <OwnersTotal owners={owners}/>
        </GreyContainer>
    );
}
 
export default Owners;