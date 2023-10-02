import Image from "next/image";
import { memo, useState, SyntheticEvent } from "react";
import getStaticMapImageURL from "@/utils/getStaticMapImageURL";
import styles from "./LazyMapImage.module.scss";

interface LazyMapImageProps {
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
}: LazyMapImageProps) {
  const [hasLoaded, setHasLoaded] = useState(false);
  const staticMapImageURL = getStaticMapImageURL({
    width,
    height,
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
