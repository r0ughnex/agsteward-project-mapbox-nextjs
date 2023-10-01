"use client";

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
  useEffect(() => {
    // Log the error that triggered this component to render.
    console.error(error.message);
  }, [error.message]);

  return (
    <>
      <h1>Error</h1>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
    </>
  );
}
