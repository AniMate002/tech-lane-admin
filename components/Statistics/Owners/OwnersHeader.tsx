

const OwnersHeader = () => {
    return (
        <div className="flex justify-between text-center w-full items-center bg-blue-100 py-4 text-sm font-semibold text-slate-500 shadow-sm border-b-[1px] border-slate-300">
            <p className="w-[20%]">Owner</p>
            <p className="w-[20%]">Qualified to buy</p>
            <p className="w-[20%]">Appointment</p>
            <p className="w-[20%]">Contact sent</p>
            <p className="w-[20%]">Closed won</p>
        </div>
    );
}
 
export default OwnersHeader;