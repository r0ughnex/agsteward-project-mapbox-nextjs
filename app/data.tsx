export async function getProjectsData() {
  const { API_DATAURL_PROJECTS = "" } = process?.env || {};

  if (!API_DATAURL_PROJECTS) {
    // This will activate the closest `error.tsx` error boundary.
    throw new Error("Unable to retrieve valid data URL for projects.");
  }

  /**
   * To accurately demonstrate the load time / behaviour of this sample app,
   * we're manually opting out of the default ('force-cache') data caching.
   */
  const response = await fetch(API_DATAURL_PROJECTS, { cache: "no-store" });

  if (!response.ok) {
    throw new Error("Failed to fetch data from the API for projects.");
  }

  return response.json();
}
