import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });




export default function AuthLayout({
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
        <div className="bg-gradient-to-br from-cyan-100 to-blue-300 min-h-[100vh] flex items-center justify-center">
          {children}
        </div>
      </body>
    </html>
  );
}