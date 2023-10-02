import Image from "next/image";
import { memo, useState, SyntheticEvent } from "react";
import getStaticMapImageURL from "@/utils/getStaticMapImageURL";
import encodeMgmtAreaGeoJSON from "@/utils/encodeMgmtAreaGeoJSON";

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

  return (
    <div
      className={styles.LazyMapImage}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      {staticMapImageURL && (
        <Image
          alt={alt || "Map with project coordinates"}
          className={
            hasLoaded
              ? styles.LazyMapImageElemLoaded
              : styles.LazyMapImageElemDefault
          }
          src={staticMapImageURL}
          onLoad={onImageLoad}
          loading="lazy"
          unoptimized
          fill
        />
      )}
    </div>
  );
}

export default memo(LazyMapImage);
