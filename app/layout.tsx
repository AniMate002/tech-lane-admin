import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation/Navigation";
import Header from "@/components/Header/Header";
import { Nunito } from "next/font/google";
import OuterContainer from "@/components/Containers/OuterContainer";

export const nunito = Nunito({ subsets: ["latin"] });
export const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
      </body>
    </html>
  );
}
