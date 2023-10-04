import { Metadata } from "next";
import PageTitle from "@/components/PageTitle/PageTitle";
import PageContent from "@/components/PageContent/PageContent";
import ProjectCards from "@/containers/ProjectCards/ProjectCards";

export const metadata: Metadata = {
  title: "AgSteward Project | Projects | Pradeep",
};

export default function Projects() {
  return (
    <>
      <PageTitle>Projects</PageTitle>
      <PageContent elementTag="section">
        <ProjectCards />
      </PageContent>
    </>
  );
}
