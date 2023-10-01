// 'id' is a required route param for retrieving project data.
interface OverviewProps {
  params: { id: string };
}

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
