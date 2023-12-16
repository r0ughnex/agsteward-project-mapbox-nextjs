export default function getEncodedAreasGeoJSON(geoJSON = "[]") {
  return encodeURIComponent(
    JSON.stringify({
      type: "FeatureCollection",
      features: JSON.parse(geoJSON),
    })
  );
}
