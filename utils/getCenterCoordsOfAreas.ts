import { ProjectManagementArea } from "@/context/DataContext/types";

export default function getCenterCoordsOfAreas(
  areas?: ProjectManagementArea[]
) {
  if (!Array.isArray(areas) || !areas.length) {
    return { latitude: 0, longitude: 0 };
  }

  try {
    /**
     * @TODO: Need to write an algorithm to find the center of the geometry,
     * but until then, just use the first coordinate in array, and zoom out.
     */
    const coords = areas[0]?.geometry?.coordinates?.[0]?.[0];
    let long = coords?.[0];
    let lat = coords?.[1];

    if (long && Array.isArray(long)) {
      lat = parseFloat((long[1] || long[0])?.toString());
      long = parseFloat(long[0]?.toString());
    }

    if (isNaN(long as number)) {
      long = 0;
    }

    if (isNaN(lat as number)) {
      lat = 0;
    }

    return {
      latitude: lat as number,
      longitude: long as number,
    };
  } catch (error: unknown | any) {
    console.log(error?.message);
    return { latitude: 0, longitude: 0 };
  }
}
