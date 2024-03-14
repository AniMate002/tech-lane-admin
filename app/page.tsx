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
        <div className="flex justify-between gap-6 mt-10 items-stretch">
          <div className="w-[70%] flex-shrink-0">
            <GraphRevenue />
          </div>
          <CurrencyConverter />
        </div>
        <div className="flex justify-between gap-6 mt-10 items-stretch">
          <PaymentHistory />
          <RecentActivity />
        </div>
        <div className="flex justify-between gap-6 mt-10 items-stretch">
          <VisitorsByBrowser/>
          <SocialMediaList />
        </div>
      </div>
  );
}
