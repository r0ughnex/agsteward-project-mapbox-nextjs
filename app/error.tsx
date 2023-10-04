"use client";

import { Metadata } from "next";
import { useEffect } from "react";
import PageTitle from "@/components/PageTitle/PageTitle";
import PageContent from "@/components/PageContent/PageContent";

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
  useEffect(() => {
    // Log the error that triggered this component to render.
    console.error(error.message);
  }, [error.message]);

  return (
    <>
      <PageTitle>Error</PageTitle>
      <PageContent>Something went wrong, please try again later.</PageContent>
    </>
  );
}
