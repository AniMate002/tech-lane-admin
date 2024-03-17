import CellItem from "./CellItem"

interface TabInfoProps {
    sum: number
}

const TabInfo:React.FC<TabInfoProps> = ({ sum }) => {
    const legendItems = [{title: "Closed Amount", color: "#f5803e"}, { title: "Revenue Goal", color: '#3b82f6'}]
    const cells = [{value: '4.2k', title: "Email"}, {value: '5.6k', title: "Social"}, {value: '6.7k', title: "Call"}, {value: '2.3k', title: "Other"}]
    const renderedLegendItems = legendItems.map(legendItem => (
        <div className="flex items-center gap-2" key={legendItem.title}>
            <div style={{backgroundColor: legendItem.color}} className="block w-[10px] h-[10px] rounded-full"></div>
            <p className="text-sm text-slate-500">{legendItem.title}</p>
        </div>
    ))
    const renderedCells = cells.map((cell, index) => (
        <CellItem key={index} title={cell.title} value={cell.value}/>
    ))
    return (
        <div>
            <h4 className="text-4xl text-blue-500">${new Intl.NumberFormat('en-US').format(sum)}</h4>
            <div className="mt-4">
                { renderedLegendItems }
            </div>
            <div className="bg-slate-200 w-full h-[1px] mt-4" />
            <div className="flex items-center gap-2 text-slate-400 mt-2">
                <i className="fa-solid fa-caret-down text-red-600"></i>
                <p>Inbound</p>
                <i className="fa-solid fa-caret-up text-green-600"></i>
                <p>Outbound</p>
            </div>
            <div className="mt-2">
                {/* {renderedCells} */}
                <div className="flex items-center">
                    <CellItem {...cells[0]}/>
                    <div className="h-[40px] w-[2px] block bg-slate-300"/>
                    <CellItem {...cells[1]}/>
                </div>
                <div className="bg-slate-200 w-full h-[1px]" />
                <div className="flex items-center">
                    <CellItem {...cells[2]}/>
                    <div className="h-[40px] w-[2px] block bg-slate-300"/>
                    <CellItem {...cells[3]}/>
                </div>
            </div>
        </div>
    );
}
 
export default TabInfo;