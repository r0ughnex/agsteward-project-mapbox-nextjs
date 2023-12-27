import { getColorThemeGrey } from "./tailwind";

interface GetStaticMapURLProps {
  width: number;
  height: number;
  latitude: number;
  longitude: number;
  scale?: number;
  zoom?: number;
}

const MapboxConfig = {
  StaticMapURLLight: process?.env?.NEXT_PUBLIC_MAPBOX_STATIC_MAP_URL_LIGHT,
  PublicAccessToken: process?.env?.NEXT_PUBLIC_MAPBOX_PERSONAL_ACCESS_TOKEN,
} as const;

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
  const pinColor = color || getColorThemeGrey(true).dark;
  return `${MapboxConfig.StaticMapURLLight}/pin-l-${label}+${pinColor}(${longitude},${latitude})/${longitude},${latitude},${zoom},0/${width}x${height}@${scale}x?attribution=false&logo=false&access_token=${MapboxConfig.PublicAccessToken}`;
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
  return `${MapboxConfig.StaticMapURLLight}/geojson(${geoJSON})/${longitude},${latitude},${zoom},0/${width}x${height}@${scale}x?attribution=false&logo=false&access_token=${MapboxConfig.PublicAccessToken}`;
}
