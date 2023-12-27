"use client";

import PageContent, {
  PageContentInfo,
} from "@/components/PageContent/PageContent";
import PageTitle from "@/components/PageTitle/PageTitle";
import { Metadata } from "next";
import { useEffect } from "react";

export const metadata: Metadata = {
  title: "AgSteward Project | Error | Pradeep",
};

interface ErrorProps {
  // 'digest' is the generated hash of the error that was thrown.
  error: Error & { digest?: string };

  // 'reset()' can be used to attempt to re-render this segment.
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  const hasErrorMessage = !!error?.message?.length;

  useEffect(() => {
    // Log the error that triggered this component to render.
    hasErrorMessage && console.error(error.message);
  }, [hasErrorMessage, error?.message]);

  return (
    <>
      <PageTitle>Error</PageTitle>
      <PageContent elementTag="section">
        <PageContentInfo>
          Something went wrong, please try again later.
        </PageContentInfo>
      </PageContent>
    </>
  );
}
