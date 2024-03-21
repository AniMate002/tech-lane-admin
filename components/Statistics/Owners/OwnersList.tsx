import { IOwner } from "@/models/Owner";
import Link from "next/link";



const OwnersList = ({ owners }: {owners: Array<IOwner>}) => {
    const renderedOwners = owners.map(owner => (
        <div key={owner._id} className="flex justify-between text-center w-full items-center  bg-blue-50 py-4 sm:text-sm text-[12px] text-slate-500 shadow-sm border-b-[1px] border-slate-300">
            <Link href={'/'} className="w-[20%] text-blue-500 font-bold">{owner.name}</Link>
            <p className="w-[20%]">{owner.qualifiedToBuy}</p>
            <p className="w-[20%]">{owner.appointment}</p>
            <p className="w-[20%]">{owner.contactSent}</p>
            <p className="w-[20%]">{owner.closedWon}</p>
        </div>
    ))
    return (
        <div>
            { renderedOwners }
        </div>
    );
}
 
export default OwnersList;