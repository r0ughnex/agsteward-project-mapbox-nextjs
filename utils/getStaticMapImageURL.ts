interface GetStaticMapURLProps {
  longitude: number;
  latitude: number;
  height: number;
  width: number;
  zoom?: number;
  scale?: number;
  label?: number;
  color?: string;
}

function getMapboxAPIDataURL() {
  return "https://api.mapbox.com";
}

function getMapboxAccessToken() {
  // @TODO: This token is public, but ideally it should be restricted when deployed to production.
  return "pk.eyJ1IjoicjB1Z2huZXgiLCJhIjoiY2xuN3ZyN2NpMHAzczJybDgzNTkxd25vbCJ9.Wu8R0lgUBVrP1w5IvTVLDw";
}

export default function getStaticMapImageURL({
  width,
  height,
  latitude,
  longitude,
  zoom = 14,
  scale = 2,
  label = 0,
  color = "111827",
}: GetStaticMapURLProps) {
  return `${getMapboxAPIDataURL()}/styles/v1/mapbox/light-v11/static/pin-l-${label}+${color}(${longitude},${latitude})/${longitude},${latitude},${zoom},0/${width}x${height}@${scale}x?attribution=false&logo=false&access_token=${getMapboxAccessToken()}`;
}
