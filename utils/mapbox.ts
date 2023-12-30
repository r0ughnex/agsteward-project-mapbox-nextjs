import { getColorThemeGrey } from "./tailwind";

interface GetStaticMapURLProps {
  width: number;
  height: number;
  latitude: number;
  longitude: number;
  scale?: number;
  zoom?: number;
}

function getMapboxConfig() {
  return {
    StaticMapURLLight: process?.env?.NEXT_PUBLIC_MAPBOX_STATIC_MAP_URL_LIGHT,
    PublicAccessToken: process?.env?.NEXT_PUBLIC_MAPBOX_PERSONAL_ACCESS_TOKEN,
  } as const;
}

interface GetStaticMapURLWithMarkerProps extends GetStaticMapURLProps {
  label?: number;
  color?: string;
}

interface GetStaticMapURLWithPolygonProps extends GetStaticMapURLProps {
  geoJSON: string;
}

export function getStaticMapURLWithMarker({
  color,
  width,
  height,
  latitude,
  longitude,
  zoom = 14,
  scale = 2,
  label = 0,
}: GetStaticMapURLWithMarkerProps) {
  const mapboxConfig = getMapboxConfig();
  const mapPinColor = color || getColorThemeGrey(true).dark;
  return `${mapboxConfig.StaticMapURLLight}/pin-l-${label}+${mapPinColor}(${longitude},${latitude})/${longitude},${latitude},${zoom},0/${width}x${height}@${scale}x?attribution=false&logo=false&access_token=${mapboxConfig.PublicAccessToken}`;
}

export function getStaticMapURLWithPolygon({
  width,
  height,
  geoJSON,
  latitude,
  longitude,
  zoom = 14,
  scale = 2,
}: GetStaticMapURLWithPolygonProps) {
  const mapboxConfig = getMapboxConfig();
  return `${mapboxConfig.StaticMapURLLight}/geojson(${geoJSON})/${longitude},${latitude},${zoom},0/${width}x${height}@${scale}x?attribution=false&logo=false&access_token=${mapboxConfig.PublicAccessToken}`;
}
