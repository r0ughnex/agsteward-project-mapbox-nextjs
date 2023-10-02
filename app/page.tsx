import ProjectCards from "@/containers/ProjectCards/ProjectCards";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AgSteward Project | Projects | Pradeep",
};

export default function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <ProjectCards />
    </>
  );
}
