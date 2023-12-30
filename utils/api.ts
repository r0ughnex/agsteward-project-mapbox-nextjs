import { APIResponseData, ProjectsData } from "@/context/DataContext/types";

export async function getProjectsDataFromAPI() {
  const { API_DATAURL_PROJECTS } = process?.env || {};

  if (!API_DATAURL_PROJECTS) {
    // This will activate the closest `error.tsx` error boundary.
    throw new Error("Unable to retrieve valid data URL for projects.");
  }

  const response = await fetch(API_DATAURL_PROJECTS, {
    // Purge data cache and re-fetch the latest data every 5 minutes.
    next: { revalidate: 300 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data from the API for projects.");
  }

  // We only care about the body which contains the data.
  return response.json() as unknown as APIResponseData[];
}

export function parseAPIResponse(data?: APIResponseData[]): ProjectsData[] {
  if (!Array.isArray(data)) {
    return [];
  }

  return data.map(({ managementAreasGeoJSON = "[]", ...other } = {}) => {
    const areas = JSON.parse(managementAreasGeoJSON);

    return {
      managementAreas: Array.isArray(areas) ? areas : [],
      managementAreasGeoJSON,
      ...other,
    };
  });
}
