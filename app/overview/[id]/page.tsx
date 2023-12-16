import PageContent, {
  PageContentInfo,
} from "@/components/PageContent/PageContent";
import PageTitle from "@/components/PageTitle/PageTitle";
import { Metadata } from "next";

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
      <PageContent elementTag="section">
        <PageContentInfo>
          This is the overview page for project {id}.
        </PageContentInfo>
      </PageContent>
    </>
  );
}
