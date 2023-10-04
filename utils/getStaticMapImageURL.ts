interface GetStaticMapURLProps {
  longitude: number;
  latitude: number;
  geoJSON?: string;
  height: number;
  width: number;
  zoom?: number;
  scale?: number;
  label?: number;
  color?: string;
}

const MapboxConfig = {
  StaticMapDataURLLight:
    "https://api.mapbox.com/styles/v1/mapbox/light-v11/static",

  PublicAccessToken:
    // @TODO: Token is public, but ideally it should be restricted when deployed to production.
    "pk.eyJ1IjoicjB1Z2huZXgiLCJhIjoiY2xuN3ZyN2NpMHAzczJybDgzNTkxd25vbCJ9.Wu8R0lgUBVrP1w5IvTVLDw",
} as const;

export default function getStaticMapImageURL({
  width,
  height,
  latitude,
  longitude,
  zoom = 14,
  scale = 2,
  label = 0,
  // geoJSON,
  color = "111827",
}: GetStaticMapURLProps) {
  /* return `${MapboxConfig.StaticMapDataURLLight}/geojson(${geoJSON})/${longitude},${latitude},${zoom},0/${width}x${height}@${scale}x?attribution=false&logo=false&access_token=${MapboxConfig.PublicAccessToken}`; */

  return `${MapboxConfig.StaticMapDataURLLight}/pin-l-${label}+${color}(${longitude},${latitude})/${longitude},${latitude},${zoom},0/${width}x${height}@${scale}x?attribution=false&logo=false&access_token=${MapboxConfig.PublicAccessToken}`;
}
