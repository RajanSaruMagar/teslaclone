import { Inter } from "next/font/google";
import "./globals.css";
import AOS from "aos";

import Navbar from "./navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
