import { Metadata } from "next";
import PageTitle from "@/components/PageTitle/PageTitle";
import PageContent from "@/components/PageContent/PageContent";

export const metadata: Metadata = {
  title: "AgSteward Project | Unknown | Pradeep",
};

export default function NotFound() {
  return (
    <>
      <PageTitle>Not found</PageTitle>
      <PageContent>The page you are looking for does not exist.</PageContent>
    </>
  );
}
