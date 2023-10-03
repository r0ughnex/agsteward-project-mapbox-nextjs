export default function getNoOfAreasFromGeoJSON(geoJSON = "[]") {
  const areas = JSON.parse(geoJSON);

  if (!Array.isArray(areas)) {
    return 0;
  }

  return areas.length;
}
