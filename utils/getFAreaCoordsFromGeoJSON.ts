export default function getFAreaCoordsFromGeoJSON(geoJSON = "[]") {
  const areas = JSON.parse(geoJSON);

  if (!Array.isArray(areas)) {
    return { latitude: 0, longitude: 0 };
  }

  try {
    let [longitude, latitude] = areas[0]?.geometry?.coordinates[0][0];

    if (longitude[1]) {
      longitude = longitude[0];
    }

    if (latitude[0]) {
      latitude = latitude[1];
    }

    return { latitude, longitude };
  } catch (error: unknown | any) {
    console.error(error?.message);
    return { latitude: 0, longitude: 0 };
  }
}
