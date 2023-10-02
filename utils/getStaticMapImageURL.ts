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
  const { NEXT_PUBLIC_API_DATAURL_MAPBOX, NEXT_PUBLIC_API_TOKEN_MAPBOX } =
    process?.env || {};

  if (!NEXT_PUBLIC_API_DATAURL_MAPBOX || !NEXT_PUBLIC_API_TOKEN_MAPBOX) {
    return "";
  }

  return `${NEXT_PUBLIC_API_DATAURL_MAPBOX}/styles/v1/mapbox/light-v11/static/pin-l-${label}+${color}(${longitude},${latitude})/${longitude},${latitude},${zoom},0/${width}x${height}@${scale}x?attribution=false&logo=false&access_token=${NEXT_PUBLIC_API_TOKEN_MAPBOX}`;
}
