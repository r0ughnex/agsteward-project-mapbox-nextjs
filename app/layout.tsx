import "./globals.scss";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
// import { getProjectsData } from "./data";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "AgSteward Project | Home | Pradeep",
};

export default async function RootLayout({ children }: RootLayoutProps) {
  // const projectsData = await getProjectsData();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
