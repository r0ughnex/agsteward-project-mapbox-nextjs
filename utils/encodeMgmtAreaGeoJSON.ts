export default function encodeMgmtAreaGeoJSON(geoJSON = "[]") {
  return encodeURIComponent(
    JSON.stringify({
      type: "FeatureCollection",
      features: JSON.parse(geoJSON),
    })
  );
}
