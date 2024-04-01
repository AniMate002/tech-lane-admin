import StatisticsPage from "@/components/Statistics/StatisticsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Statistics - Tech Lane Admin",
    description: "Statistics page of Tech Lane Admin",
  };

const Statistics = () => {
    return (
        <div>
            <StatisticsPage />
        </div>
    );
}
 
export default Statistics;