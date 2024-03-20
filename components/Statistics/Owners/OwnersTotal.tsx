import { IOwner } from "@/models/Owner";


const OwnersTotal = ({ owners }: {owners: Array<IOwner>}) => {
    return (
        <div className="flex justify-between text-center w-full items-center bg-blue-100 py-4 text-sm font-semibold text-slate-600 shadow-sm">
            <p className="w-[20%]">Total</p>
            <p className="w-[20%]">${owners.reduce((accumulator, value) => accumulator + value.qualifiedToBuy, 0)}</p>
            <p className="w-[20%]">${owners.reduce((accumulator, value) => accumulator + value.appointment, 0)}</p>
            <p className="w-[20%]">${owners.reduce((accumulator, value) => accumulator + value.contactSent, 0)}</p>
            <p className="w-[20%]">${owners.reduce((accumulator, value) => accumulator + value.closedWon, 0)}</p>
        </div>
    );
}
 
export default OwnersTotal;