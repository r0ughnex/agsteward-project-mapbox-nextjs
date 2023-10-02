import { Metadata } from "next";
import PageTitle from "@/components/PageTitle/PageTitle";
import PageContent from "@/components/PageContent/PageContent";

// 'id' is a required param for getting project data.
interface OverviewProps {
  params: { id: string };
}

export const metadata: Metadata = {
  title: "AgSteward Project | Overview | Pradeep",
};

export default function Overview({ params }: OverviewProps) {
  const { id = "0" } = params || {};

  return (
    <>
      <PageTitle>Overview</PageTitle>
      <PageContent>This is the overview page for project {id}.</PageContent>
    </>
  );
}
