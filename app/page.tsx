import CurrencyConverter from "@/components/Dashboard/CurrencyConverter";
import GraphRevenue from "@/components/Dashboard/GraphRevenue";
import StatList from "@/components/Dashboard/StatList";
import { Metadata } from "next";
import Image from "next/image";

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
      </div>
  );
}
