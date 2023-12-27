import "./globals.scss";

import Navbar from "@/components/Navbar/Navbar";
import { DataContextProvider } from "@/context/DataContext/DataContext";
import { parseAPIResponse } from "@/utils/api";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { getProjectsDataFromAPI } from "./data";

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
  const apiResponse = await getProjectsDataFromAPI();
  const projectsData = parseAPIResponse(apiResponse);

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
