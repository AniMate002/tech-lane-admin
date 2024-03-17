

const CellItem = ({ value, title }: {value: string, title: string}) => {
    return (
        <div className="px-4 py-2 flex items-center justify-center text-slate-500 flex-col">
            <h5 className="text-xl">${value}</h5>
            <p className="">{title}</p>
        </div>
    );
}
 
export default CellItem;