// 'id' is a required route param for retrieving project data.
interface OverviewProps {
  params: { id: string };
}

export default function Overview({ params }: OverviewProps) {
  return (
    <main>
      <h1>Overview {params.id}</h1>
    </main>
  );
}
