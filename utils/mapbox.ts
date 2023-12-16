import { getColorThemeGrey } from "./tailwind";

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
  StaticMapURLLight: process?.env?.NEXT_PUBLIC_MAPBOX_STATIC_MAP_URL_LIGHT,
  PublicAccessToken: process?.env?.NEXT_PUBLIC_MAPBOX_PERSONAL_ACCESS_TOKEN,
} as const;

export function getStaticMapImageURL({
  color,
  width,
  height,
  geoJSON,
  latitude,
  longitude,
  zoom = 14,
  scale = 2,
  label = 0,
}: GetStaticMapURLProps) {
  const pinColor = color || getColorThemeGrey(true).dark;
  /* return `${MapboxConfig.StaticMapURLLight}/geojson(${geoJSON})/${longitude},${latitude},${zoom},0/${width}x${height}@${scale}x?attribution=false&logo=false&access_token=${MapboxConfig.PublicAccessToken}`; */

  return `${MapboxConfig.StaticMapURLLight}/pin-l-${label}+${pinColor}(${longitude},${latitude})/${longitude},${latitude},${zoom},0/${width}x${height}@${scale}x?attribution=false&logo=false&access_token=${MapboxConfig.PublicAccessToken}`;
}
