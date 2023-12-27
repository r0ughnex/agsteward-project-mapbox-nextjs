import PageContent from "@/components/PageContent/PageContent";
import PageTitle from "@/components/PageTitle/PageTitle";
import ProjectCards from "@/containers/ProjectCards/ProjectCards";
import { Metadata } from "next";

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
