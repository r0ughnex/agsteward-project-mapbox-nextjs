export async function getProjectsDataFromAPI() {
  const { API_DATAURL_PROJECTS } = process?.env || {};

  if (!API_DATAURL_PROJECTS) {
    // This will activate the closest `error.tsx` error boundary.
    throw new Error("Unable to retrieve valid data URL for projects.");
  }

  const response = await fetch(API_DATAURL_PROJECTS, {
    // Purge the data cache and re-fetch the latest data every 5 minutes.
    next: { revalidate: 300 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data from the API for projects.");
  }

  return response.json();
}
