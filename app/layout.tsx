import "./globals.css";
import Navigation from "@/components/Navigation/Navigation";
import Header from "@/components/Header/Header";
import OuterContainer from "@/components/Containers/OuterContainer";
import { Nunito, Cabin, Inter } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
const cabin = Cabin({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
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
