import PageContent, {
  PageContentInfo,
} from "@/components/PageContent/PageContent";
import PageTitle from "@/components/PageTitle/PageTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AgSteward Project | Unknown | Pradeep",
};

export default function NotFound() {
  return (
    <>
      <PageTitle>Not found</PageTitle>
      <PageContent elementTag="section">
        <PageContentInfo>
          The page you are looking for does not exist.
        </PageContentInfo>
      </PageContent>
    </>
  );
}
