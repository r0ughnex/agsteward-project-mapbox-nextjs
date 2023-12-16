import { ProjectManagementArea } from "@/context/DataContext/types";

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
    let longitude = areaCoordinates?.[0];
    let latitude = areaCoordinates?.[1];

    if (longitude && Array.isArray(longitude)) {
      latitude = parseFloat((longitude[1] || longitude[0])?.toString());
      longitude = parseFloat(longitude[0]?.toString());
    }

    if (isNaN(longitude as number)) {
      longitude = 0;
    }

    if (isNaN(latitude as number)) {
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

export function encodeAreasGeoJSON(geoJSON = "[]") {
  return encodeURIComponent(
    JSON.stringify({
      type: "FeatureCollection",
      features: JSON.parse(geoJSON),
    })
  );
}
