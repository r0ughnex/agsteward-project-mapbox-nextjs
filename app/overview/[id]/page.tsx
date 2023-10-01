import { Metadata } from "next";

// 'id' is a required param for getting project data.
interface OverviewProps {
  params: { id: string };
}

export const metadata: Metadata = {
  title: "AgSteward Project | Overview | Pradeep",
};

export default function Overview({ params }: OverviewProps) {
  return (
    <main>
      <h1>Overview {params.id}</h1>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
    </main>
  );
}
