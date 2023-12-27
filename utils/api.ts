import { APIResponseData, ProjectsData } from "@/context/DataContext/types";

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
