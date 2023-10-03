import ProjectCards from "@/containers/ProjectCards/ProjectCards";
import PageTitle from "@/components/PageTitle/PageTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AgSteward Project | Projects | Pradeep",
};

export default function Projects() {
  return (
    <>
      <PageTitle>Projects</PageTitle>
      <ProjectCards />
    </>
  );
}
