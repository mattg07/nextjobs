import type { Metadata } from "next";
import {  Poppins, Montserrat} from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";


export const poppins = Poppins({
  variable:"--font-poppins",
  subsets: ['latin'],
  weight: ['400', '700'], // You can customize the font weights you need
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Remote Jobs",
  description: "Find your dream remote job",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`${montserrat.variable}  min-w-[350px] antialiased`}
      >
        <Navbar/>
        <Hero/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
