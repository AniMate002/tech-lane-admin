import "./../globals.css";
import Navigation from "@/components/Navigation/Navigation";
import Header from "@/components/Header/Header";
import OuterContainer from "@/components/Containers/OuterContainer";




export default function RootLayout({
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
