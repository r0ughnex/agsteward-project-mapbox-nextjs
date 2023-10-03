import Image from "next/image";
import { memo, useState, SyntheticEvent } from "react";
import getStaticMapImageURL from "@/utils/getStaticMapImageURL";
import encodeMgmtAreaGeoJSON from "@/utils/encodeMgmtAreaGeoJSON";
import { ExclamationTriangleIcon as WarningIcon } from "@heroicons/react/24/outline";

import styles from "./LazyMapImage.module.scss";

interface LazyMapImageProps {
  managementAreasGeoJSON?: string;
  longitude: number;
  latitude: number;
  height: number;
  width: number;
  alt?: string;
  id?: number;
}

function LazyMapImage({
  id,
  alt,
  width,
  height,
  latitude,
  longitude,
  managementAreasGeoJSON,
}: LazyMapImageProps) {
  const geoJSON = encodeMgmtAreaGeoJSON(managementAreasGeoJSON);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const staticMapImageURL = getStaticMapImageURL({
    width,
    height,
    geoJSON,
    latitude,
    longitude,
    label: id,
  });

  const onImageLoad = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    setHasLoaded(true);
  };

  const onImageError = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    setHasError(true);
  };

  return (
    <div
      style={{ aspectRatio: `${width} / ${height}` }}
      className={
        hasError ? styles.LazyMapImageHasError : styles.LazyMapImageDefault
      }
    >
      {staticMapImageURL && !hasError && (
        <Image
          alt={alt || "Image of map, marking the project coordinates."}
          className={
            hasLoaded
              ? styles.LazyMapImageElemHasLoaded
              : styles.LazyMapImageElemDefault
          }
          src={staticMapImageURL}
          onError={onImageError}
          onLoad={onImageLoad}
          loading="lazy"
          unoptimized
          fill
        />
      )}

      {hasError && <WarningIcon className={styles.LazyMapImageWarningIcon} />}
    </div>
  );
}

export default memo(LazyMapImage);
