import Navigation from "@/components/Navigation/Navigation";
import Header from "@/components/Header/Header";
import OuterContainer from "@/components/Containers/OuterContainer";



export default function StatisticsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-[100%] bg-white">
        <Navigation />
        <div className="flex-grow max-w-[100vw] overflow-x-hidden">
            <Header />
            <main>
                {children}
            </main>
        </div>
    </div>
  );
}












