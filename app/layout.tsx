import "./globals.scss";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import { getProjectsData } from "./data";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "AgSteward Project | Pradeep",
};

export default async function RootLayout({ children }: RootLayoutProps) {
  // const projectsData = await getProjectsData();

  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <br />
        </nav>

        {children}
      </body>
    </html>
  );
}
