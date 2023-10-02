import "./globals.scss";

import { Metadata } from "next";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import { getProjectsDataFromAPI } from "./data";
import { DataContextProvider } from "@/context/DataContext/DataContext";

const interGooleFont = Inter({
  subsets: ["latin"],
});

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "AgSteward Project | Home | Pradeep",
};

export default async function RootLayout({ children }: RootLayoutProps) {
  const projectsData = await getProjectsDataFromAPI();

  return (
    <html lang="en">
      <body className={interGooleFont.className}>
        <Navbar />

        <DataContextProvider projects={projectsData}>
          <main>{children}</main>
        </DataContextProvider>
      </body>
    </html>
  );
}
