import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

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
        suppressHydrationWarning
        className={`${montserrat.variable} min-w-[350px] antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
