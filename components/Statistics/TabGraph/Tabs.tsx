import { Dispatch, SetStateAction } from "react";


interface TabsProps{
    activeTab: "Revenue" | "Users" | "Deals" | "Profit",
    setActiveTab: Dispatch<SetStateAction<"Revenue" | "Users" | "Deals" | "Profit">>
}

const Tabs:React.FC<TabsProps> = ({ activeTab, setActiveTab }) => {
    const switches = ["Revenue", "Users", "Deals", "Profit"]
    const renderedSwitches = switches.map((switcher: any, index) => <button onClick={() => setActiveTab(switcher)} key={index} className={` relative px-5  ${activeTab === switcher ? "text-blue-500 after:bg-blue-600" : "text-slate-400"} 
    after:content-[''] after:absolute sm:after:top-8 after:top-7 after:left-0 after:w-full after:h-[1px] after:block sm:text-base text-sm
    `} >{switcher}</button>)
    return (
        <div className="flex w-full border-b-[1px]  border-slate-200 pb-2">
            { renderedSwitches }
        </div>
    );
}
 
export default Tabs;