import { ProjectManagementArea } from "@/context/DataContext/types";
import { isNumber } from "./common";

export function getCenterOfAreas(areas?: ProjectManagementArea[]) {
  if (!Array.isArray(areas) || !areas.length) {
    return { latitude: 0, longitude: 0 };
  }

  try {
    /**
     * @TODO: Need to write an algorithm to find the center of the geometry,
     * but until then, just use the first coordinate in array, and zoom out.
     */
    const areaCoordinates = areas[0]?.geometry?.coordinates?.[0]?.[0];
    let latitude = areaCoordinates?.[1];
    let longitude = areaCoordinates?.[0];

    if (longitude && Array.isArray(longitude)) {
      latitude = parseFloat(`${longitude[1]}`);
      longitude = parseFloat(`${longitude[0]}`);
    }

    if (!isNumber(longitude)) {
      longitude = 0;
    }

    if (!isNumber(latitude)) {
      latitude = 0;
    }

    return {
      longitude: longitude as number,
      latitude: latitude as number,
    };
  } catch (error: unknown | any) {
    console.log(error?.message);
    return {
      longitude: 0,
      latitude: 0,
    };
  }
}

export function getTotalSizeOfAreas(areas?: ProjectManagementArea[]) {
  if (!Array.isArray(areas) || !areas.length) {
    return 0;
  }

  try {
    return areas.reduce((currTotal, area) => {
      const { Area_ha = 0, area_ha = 0 } = area?.properties || {};
      const size = parseFloat(`${Area_ha || area_ha}`);
      return currTotal + (isNumber(size) ? size : 0);
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
