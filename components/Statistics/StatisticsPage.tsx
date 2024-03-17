import TabGraph from "./TabGraph/TabGraph";
import TopSmallGraphs from "./TopSmallGraphs/TopSmallGraphs";


const StatisticsPage = () => {
    return (
        <div className="px-10">
            <TopSmallGraphs />
            <div className="flex mt-6">
                <TabGraph />
            </div>
        </div>
    );
}
 
export default StatisticsPage;