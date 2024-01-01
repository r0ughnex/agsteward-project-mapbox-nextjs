import { ProjectManagementArea } from "@/context/DataContext/types";
import { isValidNumber } from "./common";

export function getTotalSizeOfAreas(areas?: ProjectManagementArea[]) {
  if (!Array.isArray(areas) || !areas.length) {
    return 0;
  }

  return areas.reduce((total, area) => {
    const { Area_ha, area_ha } = area?.properties || {};
    const size = parseFloat(`${Area_ha || area_ha}`);
    return total + (isValidNumber(size) ? size : 0);
  }, 0);
}

export function encodeAreasGeoJSON(geoJSON = "[]") {
  const type = "FeatureCollection";

  try {
    return encodeURIComponent(
      JSON.stringify({ type, features: JSON.parse(geoJSON) })
    );
  } catch (error: unknown | any) {
    console.log(error?.message);
    return encodeURIComponent(
      JSON.stringify({ type, features: JSON.parse("[]") })
    );
  }
}
