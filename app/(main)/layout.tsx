import Navigation from "@/components/Navigation/Navigation";
import Header from "@/components/Header/Header";
import OuterContainer from "@/components/Containers/OuterContainer";
import { Nunito, Cabin, Inter } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
const cabin = Cabin({ subsets: ["latin"] });



export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-[100%] bg-white">
        <Navigation />
        <div className="flex-grow">
            <Header />
            <main>
              <OuterContainer>
                {children}
              </OuterContainer>
            </main>
        </div>
    </div>
  );
}












