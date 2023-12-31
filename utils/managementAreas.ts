import { ProjectManagementArea } from "@/context/DataContext/types";
import { isValidNumber } from "./common";

export function getTotalSizeOfAreas(areas?: ProjectManagementArea[]) {
  if (!Array.isArray(areas) || !areas.length) {
    return 0;
  }

  try {
    return areas.reduce((total, area) => {
      const { Area_ha = 0, area_ha = 0 } = area?.properties || {};
      const size = parseFloat(`${Area_ha || area_ha}`);
      return total + (isValidNumber(size) ? size : 0);
    }, 0);
  } catch (error: unknown | any) {
    console.log(error?.message);
    return 0;
  }
}

export function encodeAreasGeoJSON(geoJSON = "[]") {
  return encodeURIComponent(
    JSON.stringify({
      type: "FeatureCollection",
      features: JSON.parse(geoJSON),
    })
  );
}
