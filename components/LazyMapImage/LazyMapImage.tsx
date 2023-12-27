import { encodeAreasGeoJSON } from "@/utils/managementAreas";
import {
  getStaticMapURLWithMarker,
  getStaticMapURLWithPolygon,
} from "@/utils/mapbox";
import { ExclamationTriangleIcon as WarningIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import Image from "next/image";
import { SyntheticEvent, memo, useState } from "react";

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
  const [hasError, setHasError] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const hasGeoJSON = !!managementAreasGeoJSON?.length;
  const staicMapImageURLProps = {
    width,
    height,
    latitude,
    longitude,
  };

  const staticMapImageURL = !hasGeoJSON
    ? getStaticMapURLWithMarker({
        ...staicMapImageURLProps,
        label: id,
      })
    : getStaticMapURLWithPolygon({
        ...staicMapImageURLProps,
        geoJSON: encodeAreasGeoJSON(managementAreasGeoJSON),
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
      className={classNames({
        [styles.LazyMapImageDefault]: !hasError,
        [styles.LazyMapImageHasError]: hasError,
      })}
    >
      {staticMapImageURL && !hasError && (
        <Image
          alt={alt || "Image of map, marking the project coordinates."}
          className={classNames({
            [styles.LazyMapImageElemDefault]: !hasLoaded,
            [styles.LazyMapImageElemHasLoaded]: hasLoaded,
          })}
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
