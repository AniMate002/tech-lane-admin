import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });




export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-gradient-to-br from-cyan-100 to-blue-300 min-h-[100vh] flex items-center justify-center">
      {children}
    </div>
  );
}