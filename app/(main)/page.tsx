import CurrencyConverter from "@/components/Dashboard/CurrencyConverter";
import GraphRevenue from "@/components/Dashboard/GraphRevenue";
import PaymentHistory from "@/components/Dashboard/PaymentHistory/PaymentHistory";
import RecentActivity from "@/components/Dashboard/RecentActivity";
import SocialMediaList from "@/components/Dashboard/SocialMedia/SocialMediaList";
import StatList from "@/components/Dashboard/StatList";
import VisitorsByBrowser from "@/components/Dashboard/VisitorsByBrowser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Lane Admin",
  description: "Main page of Tech Lane Admin",
};

export default function Home() {
  return (
      <div>
        <StatList />
        <div className="flex justify-between gap-6 mt-10 items-stretch
        flex-wrap
        xl:flex-nowrap
        ">
          <div className="flex-shrink-0
          w-full
          xl:w-[50%]
          2xl:w-[70%]
          ">
            <GraphRevenue />
          </div>
          <CurrencyConverter />
        </div>
        <div className="flex justify-between gap-6 mt-10 items-stretch
        flex-col
        md:flex-row
        ">
          <PaymentHistory />
          <RecentActivity />
        </div>
        <div className="flex justify-between gap-6 mt-10 items-stretch
        flex-wrap
        lg:flex-nowrap
        ">
          <VisitorsByBrowser/>
          <SocialMediaList />
        </div>
      </div>
  );
}
